import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import uz from './locales/uz.json';
import ru from './locales/ru.json';
import en from './locales/en.json';
import { SUPPORTED_LANGUAGES, FALLBACK_CHAIN } from './config.js';

/**
 * АРХИТЕКТУРА МУЛЬТИЯЗЫЧНОСТИ
 * ---------------------------------------------------------------------------
 * Проект разделяет два пласта переводов:
 *
 * 1. UI-строки (кнопки, подписи, состояния) — здесь, в JSON-ресурсах i18next.
 *    Плоская структура пространств имён: common / nav / search / building / unit.
 *
 * 2. Контент (подразделения, сотрудники, часы приёма) — в `src/data/**`.
 *    Контент НЕ дублируется по языкам в виде отдельных деревьев: каждое поле
 *    хранится как объект { ru, en, uz } и разрешается хелпером `pick()`
 *    (см. src/i18n/localize.js). Благодаря этому один и тот же React-компонент
 *    рендерит любую локаль без ветвлений и без дублирования разметки.
 *
 * Цепочка фолбэков: uz → ru → en. Если узбекский перевод контента ещё не
 * заполнен, интерфейс покажет русский вариант и пометит его бейджем
 * «перевод готовится» (см. компонент <TranslationNotice/>).
 */


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { uz, ru, en },
    fallbackLng: FALLBACK_CHAIN,
    supportedLngs: SUPPORTED_LANGUAGES.map((l) => l.code),
    nonExplicitSupportedLngs: true, // ru-RU → ru
    defaultNS: 'common',
    ns: ['common', 'nav', 'search', 'building', 'unit'],
    interpolation: { escapeValue: false }, // React экранирует сам
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      lookupLocalStorage: 'tsul.lang',
      caches: ['localStorage'],
    },
    react: { useSuspense: false },
  });

// Синхронизируем атрибут lang у <html> — важно для доступности и SEO.
const syncHtmlLang = (lng) => {
  const match = SUPPORTED_LANGUAGES.find((l) => l.code === lng);
  document.documentElement.lang = match?.htmlLang ?? 'ru';
};
syncHtmlLang(i18n.resolvedLanguage);
i18n.on('languageChanged', syncHtmlLang);

export { SUPPORTED_LANGUAGES, FALLBACK_CHAIN };
export default i18n;
