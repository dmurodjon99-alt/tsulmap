/**
 * Конфигурация языков без зависимости от рантайма i18next.
 *
 * Вынесено в отдельный модуль намеренно: слой данных (src/data) использует
 * цепочку фолбэков, но не должен тянуть за собой i18next и JSON-ресурсы —
 * иначе данные нельзя прочитать вне браузера (скрипты аудита, тесты, SSR).
 */

export const SUPPORTED_LANGUAGES = [
  { code: 'uz', label: 'UZ', name: "O'zbekcha", htmlLang: 'uz' },
  { code: 'ru', label: 'RU', name: 'Русский', htmlLang: 'ru' },
  { code: 'en', label: 'EN', name: 'English', htmlLang: 'en' },
];

/** Цепочка фолбэков: узбекский добирается русским, затем английским. */
export const FALLBACK_CHAIN = {
  uz: ['ru', 'en'],
  ru: ['en', 'uz'],
  en: ['ru', 'uz'],
  default: ['ru', 'en'],
};
