import { useTranslation } from 'react-i18next';
import { useL10n } from '../../i18n/localize.js';
import { UsersIcon, PinIcon, ArrowRightIcon } from '../ui/icons.jsx';

const CATEGORY_STYLES = {
  administration: 'text-gold-300 border-gold-400/30 bg-gold-500/10',
  faculty: 'text-tsul-200 border-tsul-300/30 bg-tsul-400/10',
  department: 'text-white/85 border-white/25 bg-white/10',
  service: 'text-emerald-200 border-emerald-300/25 bg-emerald-400/10',
  facility: 'text-sky-200 border-sky-300/25 bg-sky-400/10',
};

/**
 * Карточка подразделения в сетке здания.
 * Клик открывает Glassmorphism-drawer с полной информацией.
 */
export default function UnitCard({ unit, onOpen, index = 0 }) {
  const { t } = useTranslation();
  const { L } = useL10n();

  return (
    <button
      type="button"
      onClick={() => onOpen(unit)}
      className="glass-interactive glass-highlight group flex animate-slide-up flex-col rounded-2xl p-5 text-left"
      style={{ animationDelay: `${Math.min(index, 12) * 40}ms` }}
    >
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span
          className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
            CATEGORY_STYLES[unit.category] ?? CATEGORY_STYLES.department
          }`}
        >
          {t(`building:categories.${unit.category}`)}
        </span>
        {unit.floor != null && (
          <span className="glass-chip rounded-full px-2.5 py-0.5 text-[10px] text-white/65">
            {unit.floor} {t('common:floorShort')}
          </span>
        )}
      </div>

      <h3 className="font-display text-lg font-bold leading-snug text-white transition group-hover:text-gold-200">
        {L(unit.name)}
      </h3>

      {unit.summary && (
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-white/60">{L(unit.summary)}</p>
      )}

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/10 pt-3 text-xs text-white/55">
        {unit.rooms.length > 0 && (
          <span className="inline-flex items-center gap-1.5">
            <PinIcon size={13} className="text-gold-400" />
            {t('common:roomShort')} {unit.rooms.join(', ')}
          </span>
        )}
        {unit.staff.length > 0 && (
          <span className="inline-flex items-center gap-1.5">
            <UsersIcon size={13} />
            {unit.staff.length}
          </span>
        )}
        <span className="ml-auto inline-flex items-center gap-1 text-white/45 transition group-hover:text-gold-300">
          {t('common:details')}
          <ArrowRightIcon size={13} />
        </span>
      </div>
    </button>
  );
}
