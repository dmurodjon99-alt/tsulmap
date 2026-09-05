import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../ui/LanguageSwitcher.jsx';
import Logo from '../ui/Logo.jsx';
import GlobalSearch from '../search/GlobalSearch.jsx';
import { BUILDINGS } from '../../data/index.js';
import { useL10n } from '../../i18n/localize.js';

/**
 * Шапка портала: «парящая» стеклянная панель.
 * На главной поиск в шапке скрыт (он есть в hero-секции) и появляется
 * при прокрутке — так на первом экране остаётся один смысловой акцент.
 */
export default function Header() {
  const { t } = useTranslation();
  const { L } = useL10n();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location.pathname]);

  return (
    <header className="sticky top-0 z-40 px-3 pt-3 md:px-6 md:pt-4">
      <div
        className={`glass glass-highlight mx-auto flex max-w-7xl items-center gap-3 rounded-2xl px-3 py-2.5 transition-all duration-300
                    md:gap-5 md:px-5 ${scrolled ? 'shadow-glass-lg' : ''}`}
      >
        {/* Логотип / название */}
        <Link to="/" className="flex shrink-0 items-center gap-3">
          <Logo size={40} />
          <span className="hidden leading-tight sm:block">
            <span className="block font-display text-[15px] font-bold tracking-wide text-white">
              {t('common:appName')}
            </span>
            <span className="block text-[11px] text-white/55">{t('common:universityShort')}</span>
          </span>
        </Link>

        {/* Навигация по зданиям (десктоп) */}
        <nav className="hidden flex-1 items-center gap-1 lg:flex">
          {BUILDINGS.map((b) => (
            <NavLink
              key={b.id}
              to={`/building/${b.slug}`}
              className={({ isActive }) =>
                `rounded-lg px-3 py-1.5 text-sm font-medium transition ${
                  isActive
                    ? 'bg-white/15 text-white'
                    : 'text-white/65 hover:bg-white/10 hover:text-white'
                }`
              }
            >
              {L(b.short)}
            </NavLink>
          ))}
        </nav>

        {/* Компактный поиск (не на главной или после прокрутки) */}
        <div
          className={`hidden min-w-0 flex-1 transition-all duration-300 md:block ${
            !isHome || scrolled ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
        >
          <GlobalSearch size="sm" placeholderKey="search:placeholderShort" />
        </div>

        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <LanguageSwitcher />

          {/* Бургер для мобильных */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={t('nav:menu')}
            aria-expanded={menuOpen}
            className="glass-chip grid h-9 w-9 shrink-0 place-items-center rounded-xl text-white/80 lg:hidden"
          >
            <span className="flex flex-col gap-[3px]">
              <span
                className={`block h-[1.5px] w-4 bg-current transition ${menuOpen ? 'translate-y-[4.5px] rotate-45' : ''}`}
              />
              <span className={`block h-[1.5px] w-4 bg-current transition ${menuOpen ? 'opacity-0' : ''}`} />
              <span
                className={`block h-[1.5px] w-4 bg-current transition ${menuOpen ? '-translate-y-[4.5px] -rotate-45' : ''}`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {menuOpen && (
        <div className="glass-panel mx-auto mt-2 max-w-7xl animate-slide-up rounded-2xl p-3 lg:hidden">
          <div className="mb-3 md:hidden">
            <GlobalSearch size="sm" placeholderKey="search:placeholderShort" />
          </div>
          <ul className="grid gap-1">
            {BUILDINGS.map((b) => (
              <li key={b.id}>
                <NavLink
                  to={`/building/${b.slug}`}
                  className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-white/85 transition hover:bg-white/10"
                >
                  <span>{L(b.name)}</span>
                  <span className="text-xs text-white/45">
                    {b.units.length} · {L(b.short)}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
