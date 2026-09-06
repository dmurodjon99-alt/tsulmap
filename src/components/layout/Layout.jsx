import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './Header.jsx';
import { STATS } from '../../data/index.js';

/**
 * Прокрутка страницы наверх при смене маршрута.
 *
 * Тело эффекта обязательно в фигурных скобках: со стрелкой без блока эффект
 * возвращал бы результат window.scrollTo(), а React считает любое ненулевое
 * возвращённое значение функцией очистки и вызывает его при следующем
 * переходе. В обычном Chrome scrollTo возвращает undefined и всё работает, но
 * встроенные браузеры (например, в Telegram) подменяют метод и возвращают
 * значение — и приложение падало с «t is not a function», оставляя белый экран.
 *
 * scrollTo(0, 0) вместо объекта с behavior: 'instant' — эта форма понятна
 * любому движку, а значение 'instant' в старых браузерах бросает TypeError.
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function Layout({ children }) {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-dvh flex-col">
      <ScrollToTop />

      {/* Ссылка для навигации с клавиатуры */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg
                   focus:bg-tsul-800 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        {t('nav:skipToContent')}
      </a>

      <Header />

      <main id="main" className="flex-1 px-3 pb-16 pt-6 md:px-6 md:pt-10">
        {children}
      </main>

      <footer className="px-3 pb-6 md:px-6">
        <div className="glass glass-highlight mx-auto flex max-w-7xl flex-col gap-4 rounded-2xl px-5 py-5 text-sm md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-base font-semibold text-white">
              {t('common:university')}
            </p>
            <p className="mt-0.5 text-xs text-white/55">
              {t('common:appTagline')} · tsul.uz
            </p>
          </div>
          <dl className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/60">
            <div>
              <dt className="text-white/40">{t('building:title')}</dt>
              <dd className="font-semibold text-white">{STATS.buildings}</dd>
            </div>
            <div>
              <dt className="text-white/40">{t('building:categories.all')}</dt>
              <dd className="font-semibold text-white">{STATS.units}</dd>
            </div>
            <div>
              <dt className="text-white/40">{t('search:groupPeople')}</dt>
              <dd className="font-semibold text-white">{STATS.staff}</dd>
            </div>
            <div>
              <dt className="text-white/40">{t('search:groupRooms')}</dt>
              <dd className="font-semibold text-white">{STATS.rooms}</dd>
            </div>
          </dl>
        </div>
      </footer>
    </div>
  );
}
