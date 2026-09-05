import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useL10n } from '../../i18n/localize.js';
import TranslationNotice from '../ui/TranslationNotice.jsx';
import { getBuilding, getUnit } from '../../data/index.js';
import {
  CloseIcon,
  PinIcon,
  PhoneIcon,
  MailIcon,
  SendIcon,
  ClockIcon,
  UsersIcon,
  InfoIcon,
  LayersIcon,
} from '../ui/icons.jsx';

/** Секция описания: абзац или маркированный список. */
function Section({ section }) {
  const { t } = useTranslation();
  const { Lx } = useL10n();
  const { value, isFallback } = Lx(section.body ?? section.items);
  if (!value) return null;

  const isList = Array.isArray(value);

  return (
    <section className="border-t border-white/10 pt-5">
      <h4 className="mb-2 flex flex-wrap items-center font-display text-sm font-bold uppercase tracking-wide text-gold-300">
        {t(`unit:${section.key}`, { defaultValue: section.key })}
        <TranslationNotice isFallback={isFallback} />
      </h4>

      {isList ? (
        <ul className="space-y-2">
          {value.map((item, i) => (
            <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-white/75">
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400/80" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="whitespace-pre-line text-sm leading-relaxed text-white/75">{value}</p>
      )}
    </section>
  );
}

/**
 * Drawer подразделения.
 *
 * Мобильные: нижний sheet во всю ширину; десктоп: правая панель 560px.
 * Всё в стиле матового стекла, поверх затемнённого blur-backdrop.
 */
export default function UnitDrawer({ unitId, onClose }) {
  const { t } = useTranslation();
  const { L, Lx } = useL10n();
  const panelRef = useRef(null);

  const unit = unitId ? getUnit(unitId) : null;
  const building = unit ? getBuilding(unit.buildingId) : null;

  // Закрытие по Esc + блокировка прокрутки фона
  useEffect(() => {
    if (!unit) return undefined;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    panelRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [unit, onClose]);

  if (!unit || !building) return null;

  const audience = Lx(unit.audience);
  const motto = Lx(unit.motto);
  const address = Lx(unit.address);
  const hours = Lx(unit.hours);
  const related = unit.relatedUnitId ? getUnit(unit.relatedUnitId) : null;


  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <button
        type="button"
        aria-label={t('common:close')}
        onClick={onClose}
        className="absolute inset-0 animate-fade-in bg-tsul-950/60 backdrop-blur-sm"
      />

      <aside
        ref={panelRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label={L(unit.name)}
        className="glass-panel relative flex h-full w-full max-w-[600px] animate-slide-in-right flex-col
                   overflow-hidden border-l border-white/20 shadow-glass-lg focus:outline-none
                   md:m-3 md:h-[calc(100%-1.5rem)] md:rounded-3xl md:border"
      >
        {/* ------------------------ Шапка ------------------------ */}
        <header className="glass-highlight relative shrink-0 border-b border-white/10 px-5 py-5 md:px-7">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <div className="mb-2 flex flex-wrap items-center gap-2 text-[11px]">
                <span className="glass-chip rounded-full px-2.5 py-0.5 uppercase tracking-wider text-gold-300">
                  {t(`building:categories.${unit.category}`)}
                </span>
                <span className="glass-chip rounded-full px-2.5 py-0.5 text-white/70">
                  {L(building.short)}
                </span>
                {unit.floor != null && (
                  <span className="glass-chip rounded-full px-2.5 py-0.5 text-white/70">
                    {unit.floor} {t('common:floorShort')}
                  </span>
                )}
              </div>

              <h2 className="font-display text-xl font-bold leading-tight text-white md:text-2xl">
                {L(unit.name)}
              </h2>

              {address.value && (
                <p className="mt-2 flex items-start gap-2 text-xs leading-relaxed text-white/55">
                  <PinIcon size={14} className="mt-px shrink-0 text-gold-400" />
                  {address.value}
                </p>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label={t('common:close')}
              className="glass-chip grid h-9 w-9 shrink-0 place-items-center rounded-xl text-white/75 transition hover:bg-white/20 hover:text-white"
            >
              <CloseIcon size={18} />
            </button>
          </div>

          {unit.rooms.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="glass-chip inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs text-white/75">
                <PinIcon size={14} className="text-gold-400" />
                {t('unit:rooms')}: {unit.rooms.join(', ')}
              </span>
            </div>
          )}
        </header>

        {/* ------------------------ Контент ------------------------ */}
        <div className="min-h-0 flex-1 space-y-5 overflow-y-auto px-5 py-5 md:px-7">
          {/* Девиз */}
          {motto.value && (
            <blockquote className="glass rounded-2xl border-l-2 border-l-gold-400 px-4 py-3">
              <p className="font-display text-base italic leading-relaxed text-gold-100">
                {motto.value}
              </p>
              <footer className="mt-1 flex items-center text-[11px] uppercase tracking-wider text-white/45">
                {t('unit:motto')}
                <TranslationNotice isFallback={motto.isFallback} />
              </footer>
            </blockquote>
          )}

          {/* Часы приёма */}
          {hours.value && (
            <p className="glass-chip inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-white/80">
              <ClockIcon size={15} className="text-gold-400" />
              <span className="font-medium">{t('unit:hours')}:</span> {hours.value}
            </p>
          )}

          {/* Связанная карточка (кафедра размещена в нескольких корпусах) */}
          {related && (
            <p className="glass rounded-xl px-4 py-3 text-sm text-white/70">
              <InfoIcon size={15} className="mr-2 inline-block text-gold-400 align-[-2px]" />
              {t('unit:alsoIn')}{' '}
              <span className="font-semibold text-white">{L(related.name)}</span>{' '}
              <span className="text-white/50">
                ({L(getBuilding(related.buildingId)?.short)})
              </span>
            </p>
          )}
          {unit.alsoIn && (
            <p className="glass rounded-xl px-4 py-3 text-sm text-white/70">
              <LayersIcon size={15} className="mr-2 inline-block text-gold-400 align-[-2px]" />
              {t('unit:alsoIn')} <span className="text-white">{L(unit.alsoIn)}</span>
            </p>
          )}

          {/* Смысловые секции */}
          {unit.sections.map((section, i) => (
            <Section key={`${section.key}-${i}`} section={section} />
          ))}

          {/* Сотрудники */}
          {unit.staff.length > 0 && (
            <section className="border-t border-white/10 pt-5">
              <h4 className="mb-3 flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wide text-gold-300">
                <UsersIcon size={15} />
                {t('unit:staffTitle')}
                <span className="text-white/35">({unit.staff.length})</span>
              </h4>

              <ul className="grid gap-2">
                {unit.staff.map((person, i) => {
                  const name = Lx(person.name);
                  const role = Lx(person.role);
                  return (
                    <li key={i} className="glass rounded-xl px-4 py-3">
                      <p className="flex flex-wrap items-center text-sm font-semibold text-white">
                        {name.value}
                        <TranslationNotice isFallback={name.isFallback} />
                      </p>
                      {role.value && (
                        <p className="mt-0.5 text-xs leading-relaxed text-white/55">{role.value}</p>
                      )}
                    </li>
                  );
                })}
              </ul>
            </section>
          )}

          {/* График консультаций */}
          {unit.consultations.length > 0 && (
            <section className="border-t border-white/10 pt-5">
              <h4 className="mb-3 flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wide text-gold-300">
                <ClockIcon size={15} />
                {t('unit:consultations')}
              </h4>

              <div className="glass overflow-hidden rounded-xl">
                <table className="w-full text-left text-sm">
                  <thead className="bg-white/5 text-[11px] uppercase tracking-wider text-white/45">
                    <tr>
                      <th className="px-4 py-2 font-medium">{t('unit:person')}</th>
                      <th className="px-4 py-2 font-medium">{t('unit:time')}</th>
                      <th className="px-4 py-2 font-medium">{t('unit:room')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {unit.consultations.map((c, i) => (
                      <tr key={i} className="border-t border-white/10">
                        <td className="px-4 py-2.5 font-medium text-white/90">{L(c.person)}</td>
                        <td className="px-4 py-2.5 text-white/65">{L(c.when)}</td>
                        <td className="px-4 py-2.5 text-gold-200">{c.room ?? '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* Кто может обратиться */}
          {audience.value && (
            <section className="border-t border-white/10 pt-5">
              <h4 className="mb-2 flex flex-wrap items-center font-display text-sm font-bold uppercase tracking-wide text-gold-300">
                {t('unit:audience')}
                <TranslationNotice isFallback={audience.isFallback} />
              </h4>
              <p className="text-sm leading-relaxed text-white/75">{audience.value}</p>
            </section>
          )}

          {/* Контакты */}
          {unit.contacts && (
            <section className="border-t border-white/10 pt-5">
              <h4 className="mb-3 font-display text-sm font-bold uppercase tracking-wide text-gold-300">
                {t('unit:contacts')}
              </h4>

              <div className="grid gap-2 sm:grid-cols-2">
                {unit.contacts.phone?.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/[^\d+]/g, '')}`}
                    className="glass flex items-center gap-2.5 rounded-xl px-4 py-3 text-sm text-white/80 transition hover:bg-white/15"
                  >
                    <PhoneIcon size={15} className="shrink-0 text-gold-400" />
                    <span className="truncate">{phone}</span>
                  </a>
                ))}
                {unit.contacts.email?.map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email.replace(/^www\./, '')}`}
                    className="glass flex items-center gap-2.5 rounded-xl px-4 py-3 text-sm text-white/80 transition hover:bg-white/15"
                  >
                    <MailIcon size={15} className="shrink-0 text-gold-400" />
                    <span className="truncate">{email}</span>
                  </a>
                ))}
                {unit.contacts.telegram?.map((tg) => (
                  <a
                    key={tg}
                    href={
                      tg.startsWith('http')
                        ? tg
                        : `https://t.me/${tg.replace(/^[@]|^t\.me\//, '')}`
                    }
                    target="_blank"
                    rel="noreferrer noopener"
                    className="glass flex items-center gap-2.5 rounded-xl px-4 py-3 text-sm text-white/80 transition hover:bg-white/15"
                  >
                    <SendIcon size={15} className="shrink-0 text-gold-400" />
                    <span className="truncate">{tg}</span>
                  </a>
                ))}
              </div>
            </section>
          )}

          <p className="pb-2 pt-2 text-[11px] text-white/35">{t('unit:sourceNote')}</p>
        </div>
      </aside>
    </div>
  );
}
