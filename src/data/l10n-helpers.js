/**
 * Хелперы для компактной записи трёхъязычного контента.
 *
 * Ключевая идея: структура данных описывается ОДИН раз, а язык подставляется
 * на этапе рендера. Никаких `unitsRu.js` / `unitsEn.js` — только одно дерево.
 *
 *   L('Ректорат', 'Rectorate', 'Rektorat')  →  { ru, en, uz }
 *
 * Третий аргумент необязателен: если узбекского варианта ещё нет, `pick()`
 * автоматически спустится по цепочке фолбэков uz → ru → en и пометит текст
 * как непереведённый.
 */

/** Локализованное значение: строка или массив строк. */
export const L = (ru, en, uz = null) => {
  const out = {};
  if (ru !== null && ru !== undefined) out.ru = ru;
  if (en !== null && en !== undefined) out.en = en;
  if (uz !== null && uz !== undefined) out.uz = uz;
  return out;
};

/**
 * Сотрудник: P(['ФИО', 'должность'], ['Name', 'position'], ['FIO', 'lavozim'])
 * Второй элемент массива — должность; допускается null, если её нет.
 */
export const P = (ru, en = null, uz = null) => ({
  name: L(ru?.[0] ?? null, en?.[0] ?? null, uz?.[0] ?? null),
  role: L(ru?.[1] ?? null, en?.[1] ?? null, uz?.[1] ?? null),
});

/** Секция с абзацем текста. `key` соответствует ключу в i18n-неймспейсе `unit`. */
export const S = (key, ru, en = null, uz = null) => ({ key, body: L(ru, en, uz) });

/** Секция-список (маркированный перечень). */
export const SL = (key, ru, en = null, uz = null) => ({ key, items: L(ru, en, uz) });

/** Строка графика консультаций. */
export const C = (person, when, room = null) => ({
  person: typeof person === 'string' ? L(person, person) : person,
  when,
  room,
});

/** Контактный блок: массивы, т.к. у подразделений бывает по нескольку номеров. */
export const contacts = ({ phone = [], email = [], telegram = [], links = [] } = {}) => ({
  phone,
  email,
  telegram,
  links,
});
