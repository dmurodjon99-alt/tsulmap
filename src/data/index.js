import { building1 } from './buildings/building-1.js';
import { building2 } from './buildings/building-2.js';
import { building3 } from './buildings/building-3.js';
import { building4 } from './buildings/building-4.js';
import { searchableText } from '../i18n/localize.js';

/**
 * СЛОЙ ДАННЫХ
 * ---------------------------------------------------------------------------
 * 1) normalizeUnit  — приводит «сырые» записи из файлов зданий к единой форме
 *                      и достраивает недостающее (buildingId, узбекские ФИО и т.п.);
 * 2) BUILDINGS/UNITS — плоские коллекции для рендера и поиска;
 * 3) SEARCH_INDEX    — предпосчитанный индекс: подразделения, люди, аудитории.
 *
 * Индекс строится один раз при загрузке модуля: объём данных (≈50 подразделений,
 * ≈350 сотрудников) укладывается в единицы миллисекунд, поэтому серверный поиск
 * здесь избыточен.
 */

const RAW_BUILDINGS = [building1, building2, building3, building4];

/**
 * ФИО на узбекском в исходных файлах есть только для 3-го здания.
 * Для остальных подставляем латинское написание из английской версии:
 * это корректнее, чем показывать кириллицу в узбекской локали.
 */
const withUzbekNameFallback = (person) => {
  if (person.name?.uz || !person.name?.en) return person;
  return { ...person, name: { ...person.name, uz: person.name.en } };
};

const normalizeUnit = (unit, building) => ({
  category: 'service',
  rooms: [],
  sections: [],
  staff: [],
  consultations: [],
  keywords: [],
  ...unit,
  buildingId: building.id,
  buildingNumber: building.number,
  buildingSlug: building.slug,
  buildingName: building.name,
  staff: (unit.staff ?? []).map(withUzbekNameFallback),
});

export const BUILDINGS = RAW_BUILDINGS.map((b) => ({
  ...b,
  units: b.units.map((u) => normalizeUnit(u, b)),
}));

/** Плоский список всех подразделений кампуса. */
export const UNITS = BUILDINGS.flatMap((b) => b.units);

export const getBuilding = (id) =>
  BUILDINGS.find((b) => b.id === id || b.slug === id || String(b.number) === String(id));

export const getUnit = (id) => UNITS.find((u) => u.id === id);

/** Подразделения конкретного здания с необязательной фильтрацией. */
export const getUnits = (buildingId, { category = 'all', floor = 'all' } = {}) =>
  (getBuilding(buildingId)?.units ?? []).filter(
    (u) =>
      (category === 'all' || u.category === category) &&
      (floor === 'all' || String(u.floor) === String(floor))
  );

/** Сколько сотрудников числится в здании (для карточек на главной). */
export const countStaff = (building) =>
  building.units.reduce((sum, u) => sum + (u.staff?.length ?? 0), 0);

/** Уникальные категории, реально встречающиеся в здании. */
export const buildingCategories = (building) => [
  'all',
  ...Array.from(new Set(building.units.map((u) => u.category))),
];

/* =========================================================================
   ПОИСКОВЫЙ ИНДЕКС
   ========================================================================= */

const normalize = (s) =>
  (s ?? '')
    .toString()
    .toLowerCase()
    .replace(/ё/g, 'е')
    .replace(/[’'`ʻ]/g, "'")
    .replace(/\s+/g, ' ')
    .trim();

/**
 * Каждая запись индекса содержит `haystack` — склейку ВСЕХ языковых вариантов.
 * Благодаря этому запрос «Moot Court» находится и в русской локали,
 * а «Имомов» — в английской.
 */
const buildIndex = () => {
  const entries = [];

  for (const building of BUILDINGS) {
    for (const unit of building.units) {
      // 1. Подразделение
      entries.push({
        type: 'unit',
        id: unit.id,
        unitId: unit.id,
        buildingId: building.id,
        buildingNumber: building.number,
        floor: unit.floor,
        rooms: unit.rooms,
        title: unit.name,
        subtitle: unit.summary ?? unit.address,
        haystack: normalize(
          [
            searchableText(unit.name),
            searchableText(unit.summary),
            searchableText(unit.motto),
            searchableText(unit.address),
            (unit.keywords ?? []).join(' '),
            unit.rooms.join(' '),
            // дисциплины и задачи тоже участвуют в поиске
            unit.sections.map((s) => searchableText(s.body ?? s.items)).join(' '),
          ].join(' ')
        ),
      });

      // 2. Аудитории/кабинеты как самостоятельные цели навигации
      for (const room of unit.rooms) {
        entries.push({
          type: 'room',
          id: `${unit.id}:${room}`,
          unitId: unit.id,
          buildingId: building.id,
          buildingNumber: building.number,
          floor: unit.floor,
          room,
          rooms: [room],
          title: { ru: `Кабинет ${room}`, en: `Room ${room}`, uz: `${room}-xona` },
          subtitle: unit.name,
          haystack: normalize(`${room} ${searchableText(unit.name)}`),
        });
      }

      // 3. Сотрудники
      for (const person of unit.staff) {
        entries.push({
          type: 'person',
          id: `${unit.id}:${searchableText(person.name).slice(0, 40)}`,
          unitId: unit.id,
          buildingId: building.id,
          buildingNumber: building.number,
          floor: unit.floor,
          rooms: unit.rooms,
          title: person.name,
          subtitle: person.role,
          extra: unit.name,
          haystack: normalize(
            `${searchableText(person.name)} ${searchableText(person.role)} ${searchableText(unit.name)}`
          ),
        });
      }
    }
  }
  return entries;
};

export const SEARCH_INDEX = buildIndex();

/** Приоритет типов в выдаче: подразделения → аудитории → люди. */
const TYPE_WEIGHT = { unit: 0, room: 1, person: 2 };

/**
 * search() — простое, но предсказуемое ранжирование:
 *   +100 точное совпадение, +60 начало строки, +30 начало слова, +10 вхождение.
 * Все токены запроса должны найтись (AND-семантика).
 */
export function search(query, { limit = 24 } = {}) {
  const q = normalize(query);
  if (q.length < 2) return [];
  const tokens = q.split(' ').filter(Boolean);

  const scored = [];
  for (const entry of SEARCH_INDEX) {
    let score = 0;
    let matchedAll = true;

    for (const token of tokens) {
      const pos = entry.haystack.indexOf(token);
      if (pos === -1) {
        matchedAll = false;
        break;
      }
      if (entry.haystack === token) score += 100;
      else if (pos === 0) score += 60;
      else if (entry.haystack[pos - 1] === ' ') score += 30;
      else score += 10;
    }
    if (!matchedAll) continue;

    // Короткие записи (например, «401») релевантнее длинных описаний
    score += Math.max(0, 24 - entry.haystack.length / 40);
    score -= TYPE_WEIGHT[entry.type] * 4;

    scored.push({ ...entry, score });
  }

  return scored.sort((a, b) => b.score - a.score).slice(0, limit);
}

/** Группировка результатов для выпадающего списка. */
export function groupResults(results) {
  return {
    unit: results.filter((r) => r.type === 'unit'),
    room: results.filter((r) => r.type === 'room'),
    person: results.filter((r) => r.type === 'person'),
  };
}

export const STATS = {
  buildings: BUILDINGS.length,
  units: UNITS.length,
  staff: UNITS.reduce((n, u) => n + u.staff.length, 0),
  rooms: new Set(UNITS.flatMap((u) => u.rooms.map((r) => `${u.buildingId}-${r}`))).size,
};
