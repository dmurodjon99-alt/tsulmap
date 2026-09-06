import { useTranslation } from 'react-i18next';
import { FALLBACK_CHAIN } from './config.js';

/**
 * pick() — разрешение локализованного значения из объекта { ru, en, uz }.
 *
 * Возвращает { value, lang, isFallback }:
 *   value      — строка (или массив строк) на выбранном языке;
 *   lang       — язык, из которого фактически взято значение;
 *   isFallback — true, если пришлось спуститься по цепочке фолбэков.
 *
 * Такой контракт позволяет UI честно сообщать пользователю,
 * что перед ним ещё не переведённый фрагмент.
 */
export function pick(field, lang) {
  if (field === null || field === undefined) {
    return { value: null, lang: null, isFallback: false };
  }
  // Примитив без переводов (номер кабинета, e-mail, телефон) — отдаём как есть.
  if (typeof field === 'string' || Array.isArray(field)) {
    return { value: field, lang, isFallback: false };
  }
  if (field[lang] !== undefined && field[lang] !== null && field[lang] !== '') {
    return { value: field[lang], lang, isFallback: false };
  }
  const chain = FALLBACK_CHAIN[lang] ?? FALLBACK_CHAIN.default;
  for (const alt of chain) {
    if (field[alt]) return { value: field[alt], lang: alt, isFallback: true };
  }
  return { value: null, lang: null, isFallback: false };
}

/** Короткая форма: только значение (когда индикатор фолбэка не нужен). */
export const pickValue = (field, lang) => pick(field, lang).value;

/**
 * useL10n() — основной хук для компонентов.
 *
 *   const { L, Lx, lang } = useL10n();
 *   <h2>{L(unit.name)}</h2>                     // строка
 *   const { value, isFallback } = Lx(unit.goal); // строка + метаданные
 */
export function useL10n() {
  const { i18n } = useTranslation();
  const lang = i18n.resolvedLanguage || 'ru';
  return {
    lang,
    L: (field) => pickValue(field, lang),
    Lx: (field) => pick(field, lang),
  };
}

/**
 * searchableText() — собирает все языковые варианты поля в одну строку.
 * Используется поисковым индексом: студент может искать «Moot Court»
 * латиницей, находясь в русской версии интерфейса.
 */
export function searchableText(field) {
  if (!field) return '';
  if (typeof field === 'string') return field;
  if (Array.isArray(field)) return field.map(searchableText).join(' ');
  return Object.values(field).filter(Boolean).map(searchableText).join(' ');
}
