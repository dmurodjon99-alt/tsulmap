import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import GlobalSearch from '../components/search/GlobalSearch.jsx';
import HeroVideo from '../components/home/HeroVideo.jsx';
import Logo from '../components/ui/Logo.jsx';
import { BUILDINGS, countStaff, STATS } from '../data/index.js';
import { useL10n } from '../i18n/localize.js';
import { ArrowRightIcon, BuildingIcon, LayersIcon, PinIcon, UsersIcon } from '../components/ui/icons.jsx';

/** Карточка здания в меню выбора — основной входной элемент портала. */
function BuildingCard({ building, index }) {
  const { t } = useTranslation();
  const { L } = useL10n();
  // Этажность считаем по этажам, на которых реально размещены подразделения
  const floors = new Set(building.units.map((u) => u.floor).filter((f) => f != null)).size;

  return (
    <article
      className="glass-interactive glass-highlight group relative overflow-hidden rounded-3xl p-6 animate-slide-up"
      style={{ animationDelay: `${index * 70}ms` }}
    >
      {/* Мягкая цветовая заливка, различающая здания */}
      <div
        className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${building.accent} blur-2xl transition-opacity duration-500 group-hover:opacity-90`}
      />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="label-eyebrow">{t('common:universityShort')}</span>
            <h3 className="mt-1 font-display text-2xl font-bold leading-tight text-white">
              {L(building.name)}
            </h3>
          </div>
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-white/20 bg-white/10 font-display text-2xl font-bold text-gold-400 shadow-glass-inset">
            {building.number}
          </span>
        </div>

        {building.nickname && (
          <p className="mt-2 text-xs text-gold-200/80">
            {t('building:nickname')}: «{L(building.nickname)}»
          </p>
        )}

        <p className="mt-3 min-h-[3rem] text-sm leading-relaxed text-white/70">
          {L(building.subtitle)}
        </p>

        <p className="mt-3 flex items-start gap-2 text-xs text-white/50">
          <PinIcon size={14} className="mt-px shrink-0" />
          {L(building.address)}
        </p>

        <dl className="mt-5 grid grid-cols-3 gap-2 border-t border-white/10 pt-4 text-center">
          <div>
            <dt className="text-[11px] text-white/45">{t('building:categories.all')}</dt>
            <dd className="font-display text-lg font-bold text-white">{building.units.length}</dd>
          </div>
          <div>
            <dt className="text-[11px] text-white/45">{t('search:groupPeople')}</dt>
            <dd className="font-display text-lg font-bold text-white">{countStaff(building)}</dd>
          </div>
          <div>
            <dt className="text-[11px] text-white/45">{t('unit:floor')}</dt>
            <dd className="font-display text-lg font-bold text-white">{floors}</dd>
          </div>
        </dl>

        <Link to={`/building/${building.slug}`} className="btn-primary mt-5 w-full">
          {t('building:openBuilding')}
          <ArrowRightIcon size={16} />
        </Link>
      </div>
    </article>
  );
}

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="mx-auto max-w-7xl">
      {/* ============================ HERO ============================ */}
      {/* `isolate` создаёт локальный стек-контекст: видео лежит на z-0,
          содержимое — на z-10, и заставка не перекрывает интерфейс. */}
      <section className="relative isolate pb-6 pt-6 text-center md:pb-10 md:pt-14">
        <HeroVideo />

        <div className="relative z-10">
          <Logo size={92} className="mx-auto mb-5 animate-fade-in md:mb-6 md:!h-[112px] md:!w-[112px]" />

          <p className="label-eyebrow animate-fade-in drop-shadow">{t('common:university')}</p>

          <h1
            className="mx-auto mt-3 max-w-3xl text-balance font-display text-4xl font-bold leading-[1.1] text-white animate-slide-up md:text-6xl"
            style={{ textShadow: '0 2px 24px rgba(4,18,43,0.8)' }}
          >
            {t('common:appTagline')}
          </h1>

          <p
            className="mx-auto mt-4 max-w-xl text-balance text-sm text-white/80 animate-slide-up md:text-base"
            style={{ animationDelay: '80ms', textShadow: '0 1px 12px rgba(4,18,43,0.9)' }}
          >
            {t('building:subtitle')}
          </p>

          {/* `relative z-30` обязателен: `animate-slide-up` оставляет transform,
              а transform создаёт стек-контекст — без явного z-index выпадающая
              выдача поиска оказывалась под чипами статистики ниже по потоку. */}
          <div
            className="relative z-30 mx-auto mt-8 max-w-2xl animate-slide-up"
            style={{ animationDelay: '140ms' }}
          >
            <GlobalSearch />
          </div>

          {/* Сводка по кампусу */}
          <ul
            className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-2 animate-fade-in"
            style={{ animationDelay: '220ms' }}
          >
            {[
              { Icon: LayersIcon, value: STATS.units, key: 'building:categories.all' },
              { Icon: UsersIcon, value: STATS.staff, key: 'search:groupPeople' },
              { Icon: PinIcon, value: STATS.rooms, key: 'search:groupRooms' },
              { Icon: BuildingIcon, value: STATS.buildings, key: 'building:title' },
            ].map(({ Icon, value, key }) => (
              <li
                key={key}
                className="flex items-center gap-2 rounded-full border border-white/20 bg-tsul-950/55 px-3.5 py-1.5 text-xs text-white/85 backdrop-blur-xs"
              >
                <Icon size={14} className="text-gold-400" />
                <span className="font-semibold text-white">{value}</span>
                <span className="text-white/70">{t(key)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ======================= ВЫБОР ЗДАНИЯ ======================== */}
      <section className="mt-12 md:mt-16">
        <div className="mb-5 flex items-end justify-between gap-4 px-1">
          <div>
            <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
              {t('building:title')}
            </h2>
            <p className="mt-1 text-sm text-white/55">{t('building:selectPrompt')}</p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {BUILDINGS.map((building, i) => (
            <BuildingCard key={building.id} building={building} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
