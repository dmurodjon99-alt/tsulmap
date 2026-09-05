import { useMemo, useState } from 'react';
import { Link, useParams, useSearchParams, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getBuilding, buildingCategories, countStaff } from '../data/index.js';
import { useL10n } from '../i18n/localize.js';
import UnitCard from '../components/building/UnitCard.jsx';
import UnitDrawer from '../components/unit/UnitDrawer.jsx';
import { ArrowLeftIcon, PinIcon, UsersIcon } from '../components/ui/icons.jsx';

/**
 * Страница здания: фильтры по категории и этажу + сетка карточек подразделений.
 * Открытая карточка отражается в URL (?unit=…) — ссылку можно переслать.
 */
export default function BuildingPage() {
  const { slug } = useParams();
  const { t } = useTranslation();
  const { L } = useL10n();
  const [searchParams, setSearchParams] = useSearchParams();

  const [category, setCategory] = useState('all');
  const [floor, setFloor] = useState('all');

  const building = getBuilding(slug);
  const openUnitId = searchParams.get('unit');

  const floors = useMemo(
    () =>
      building
        ? Array.from(new Set(building.units.map((u) => u.floor).filter((f) => f != null))).sort(
            (a, b) => a - b
          )
        : [],
    [building]
  );

  const units = useMemo(() => {
    if (!building) return [];
    return building.units.filter(
      (u) =>
        (category === 'all' || u.category === category) &&
        (floor === 'all' || String(u.floor) === String(floor))
    );
  }, [building, category, floor]);

  if (!building) return <Navigate to="/" replace />;

  const openUnit = (unit) => {
    const next = new URLSearchParams(searchParams);
    next.set('unit', unit.id);
    setSearchParams(next, { replace: false });
  };

  const closeUnit = () => {
    const next = new URLSearchParams(searchParams);
    next.delete('unit');
    setSearchParams(next, { replace: true });
  };

  return (
    <div className="mx-auto max-w-7xl">
      {/* ----------------------- Шапка здания ----------------------- */}
      <div className="glass glass-highlight relative overflow-hidden rounded-3xl p-6 md:p-8">
        <div
          className={`pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br ${building.accent} blur-3xl`}
        />

        <div className="relative">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs text-white/55 transition hover:text-white"
          >
            <ArrowLeftIcon size={14} />
            {t('nav:breadcrumbHome')}
          </Link>

          <div className="mt-3 flex flex-wrap items-start justify-between gap-5">
            <div className="max-w-2xl">
              <h1 className="font-display text-3xl font-bold leading-tight text-white md:text-4xl">
                {L(building.name)}
                {building.nickname && (
                  <span className="ml-3 align-middle text-base font-normal text-gold-300/80">
                    «{L(building.nickname)}»
                  </span>
                )}
              </h1>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{L(building.subtitle)}</p>
              <p className="mt-3 flex items-center gap-2 text-xs text-white/50">
                <PinIcon size={14} className="text-gold-400" />
                {L(building.address)}
              </p>
            </div>

            <div className="flex flex-col items-end gap-3">
              <dl className="flex gap-4 text-right text-xs text-white/55">
                <div>
                  <dt>{t('building:categories.all')}</dt>
                  <dd className="font-display text-lg font-bold text-white">
                    {building.units.length}
                  </dd>
                </div>
                <div>
                  <dt className="inline-flex items-center gap-1">
                    <UsersIcon size={12} />
                    {t('search:groupPeople')}
                  </dt>
                  <dd className="font-display text-lg font-bold text-white">
                    {countStaff(building)}
                  </dd>
                </div>
                <div>
                  <dt>{t('unit:floor')}</dt>
                  <dd className="font-display text-lg font-bold text-white">
                    {floors.length}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------- Фильтры -------------------------- */}
      <div className="sticky top-[76px] z-20 mt-5 flex flex-wrap items-center gap-2 rounded-2xl">
        <div className="glass glass-highlight no-scrollbar flex flex-1 items-center gap-1 overflow-x-auto rounded-2xl p-1.5">
          {buildingCategories(building).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={`whitespace-nowrap rounded-xl px-3.5 py-2 text-xs font-semibold transition ${
                category === cat
                  ? 'bg-gold-500/85 text-tsul-950'
                  : 'text-white/65 hover:bg-white/10 hover:text-white'
              }`}
            >
              {t(`building:categories.${cat}`)}
            </button>
          ))}
        </div>

        {floors.length > 1 && (
          <div className="glass glass-highlight flex items-center gap-1 rounded-2xl p-1.5">
            <span className="px-2 text-[11px] uppercase tracking-wider text-white/40">
              {t('building:filterByFloor')}
            </span>
            <button
              type="button"
              onClick={() => setFloor('all')}
              className={`rounded-xl px-3 py-2 text-xs font-semibold transition ${
                floor === 'all' ? 'bg-white/20 text-white' : 'text-white/60 hover:bg-white/10'
              }`}
            >
              {t('common:all')}
            </button>
            {floors.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFloor(f)}
                className={`min-w-[34px] rounded-xl px-2.5 py-2 text-xs font-semibold transition ${
                  String(floor) === String(f)
                    ? 'bg-white/20 text-white'
                    : 'text-white/60 hover:bg-white/10'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ------------------ Сетка подразделений --------------------- */}
      {units.length ? (
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {units.map((unit, i) => (
            <UnitCard key={unit.id} unit={unit} onOpen={openUnit} index={i} />
          ))}
        </div>
      ) : (
        <p className="glass mt-5 rounded-2xl px-6 py-10 text-center text-sm text-white/60">
          {t('building:emptyFilter')}
        </p>
      )}

      {/* --------------------- Drawer подразделения ----------------- */}
      <UnitDrawer unitId={openUnitId} onClose={closeUnit} />
    </div>
  );
}
