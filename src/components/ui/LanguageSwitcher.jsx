import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES } from '../../i18n/index.js';
import { GlobeIcon } from './icons.jsx';

/**
 * Переключатель языков UZ | RU | EN.
 *
 * Реализован как segmented control на матовом стекле: активный язык
 * подсвечивается «золотой» пилюлей, которая плавно перемещается —
 * поэтому переключение читается как одно движение, а не как три кнопки.
 */
export default function LanguageSwitcher({ compact = false }) {
  const { i18n, t } = useTranslation();
  const current = i18n.resolvedLanguage;
  const activeIndex = Math.max(
    0,
    SUPPORTED_LANGUAGES.findIndex((l) => l.code === current)
  );

  return (
    <div
      className="glass-chip glass-highlight relative flex items-center gap-1 rounded-full p-1"
      role="group"
      aria-label={t('common:language')}
    >
      {!compact && (
        <GlobeIcon size={16} className="ml-2 mr-0.5 shrink-0 text-white/55" />
      )}

      {/* Подвижный индикатор активного языка */}
      <span
        aria-hidden="true"
        className="absolute top-1 h-[calc(100%-8px)] rounded-full bg-gold-500/85 shadow-[0_2px_12px_rgba(201,162,39,0.45)] transition-transform duration-300 ease-out"
        style={{
          width: 'calc((100% - 8px - var(--globe-w)) / 3)',
          left: 'calc(4px + var(--globe-w))',
          transform: `translateX(${activeIndex * 100}%)`,
          '--globe-w': compact ? '0px' : '26px',
        }}
      />

      {SUPPORTED_LANGUAGES.map((lang) => {
        const isActive = lang.code === current;
        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => i18n.changeLanguage(lang.code)}
            aria-pressed={isActive}
            title={lang.name}
            className={`relative z-10 min-w-[42px] rounded-full px-3 py-1.5 text-xs font-bold tracking-wide transition-colors duration-200
              ${isActive ? 'text-tsul-950' : 'text-white/70 hover:text-white'}`}
          >
            {lang.label}
          </button>
        );
      })}
    </div>
  );
}
