import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { search, groupResults, getBuilding } from '../../data/index.js';
import { useL10n } from '../../i18n/localize.js';
import { SearchIcon, CloseIcon, PinIcon, UsersIcon, LayersIcon } from '../ui/icons.jsx';

const GROUP_META = {
  unit: { labelKey: 'search:groupUnits', Icon: LayersIcon },
  room: { labelKey: 'search:groupRooms', Icon: PinIcon },
  person: { labelKey: 'search:groupPeople', Icon: UsersIcon },
};

/**
 * Подсветка найденного фрагмента.
 * Совпадения ищутся по каждому токену запроса без учёта регистра —
 * так пользователь сразу видит, почему запись попала в выдачу.
 */
function Highlight({ text, tokens }) {
  if (!text) return null;
  const valid = tokens.filter((tok) => tok.length >= 2);
  if (!valid.length) return text;

  const escaped = valid.map((tok) => tok.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const parts = String(text).split(new RegExp(`(${escaped.join('|')})`, 'ig'));

  return parts.map((part, i) =>
    valid.some((tok) => tok.toLowerCase() === part.toLowerCase()) ? (
      <mark key={i} className="search-mark">
        {part}
      </mark>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

/**
 * Глобальный мультиязычный поиск.
 *
 * Ищет одновременно по подразделениям, аудиториям и сотрудникам, причём
 * индекс содержит все три языка сразу: запрос «Moot Court» находится
 * в русской локали, «Имомов» — в английской (см. src/data/index.js).
 *
 * Управление с клавиатуры: ↑/↓ — перебор, Enter — переход, Esc — закрыть,
 * «/» в любом месте страницы — фокус на поле.
 */
export default function GlobalSearch({ size = 'lg', placeholderKey = 'search:placeholder' }) {
  const { t } = useTranslation();
  const { L } = useL10n();
  const navigate = useNavigate();

  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef(null);
  const boxRef = useRef(null);

  const results = useMemo(() => search(query), [query]);
  // Токены запроса — для подсветки совпадений в выдаче
  const tokens = useMemo(
    () => query.trim().split(/\s+/).filter((tok) => tok.length >= 2),
    [query]
  );
  const grouped = useMemo(() => groupResults(results), [results]);
  const flat = useMemo(
    () => [...grouped.unit, ...grouped.room, ...grouped.person],
    [grouped]
  );

  // Горячая клавиша «/» — фокус на поиске
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === '/' && document.activeElement?.tagName !== 'INPUT') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Клик вне компонента закрывает выдачу
  useEffect(() => {
    const onClick = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const goTo = (entry) => {
    if (!entry) return;
    const building = getBuilding(entry.buildingId);
    if (!building) return;
    const params = new URLSearchParams({ unit: entry.unitId });
    navigate(`/building/${building.slug}?${params.toString()}`);
    setOpen(false);
    setQuery('');
    inputRef.current?.blur();
  };

  const onKeyDown = (e) => {
    if (!open || !flat.length) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setCursor((c) => (c + 1) % flat.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setCursor((c) => (c - 1 + flat.length) % flat.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      goTo(flat[cursor]);
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  const isLarge = size === 'lg';

  return (
    <div ref={boxRef} className="relative w-full">
      <div
        className={`search-field glass-highlight flex items-center gap-3 rounded-2xl transition
                    ${isLarge ? 'px-5 py-4' : 'px-4 py-2.5'}`}
      >
        <SearchIcon size={isLarge ? 22 : 18} className="shrink-0 text-white/70" />
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setCursor(0);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          type="search"
          role="combobox"
          aria-expanded={open}
          aria-controls="global-search-results"
          placeholder={t(placeholderKey)}
          className={`w-full bg-transparent text-white placeholder:text-white/60 focus:outline-none
                      ${isLarge ? 'text-base md:text-lg' : 'text-sm'}`}
        />
        {query ? (
          <button
            type="button"
            onClick={() => {
              setQuery('');
              inputRef.current?.focus();
            }}
            aria-label={t('search:clear')}
            className="shrink-0 rounded-full p-1 text-white/60 transition hover:bg-white/10 hover:text-white"
          >
            <CloseIcon size={16} />
          </button>
        ) : (
          isLarge && (
            <kbd className="hidden shrink-0 rounded-md border border-white/20 bg-white/10 px-2 py-0.5 text-[11px] text-white/60 md:block">
              /
            </kbd>
          )
        )}
      </div>

      {isLarge && !query && (
        <p
          className="mt-3 px-1 text-xs text-white/70"
          style={{ textShadow: '0 1px 10px rgba(4,18,43,0.95)' }}
        >
          {t('search:hint')}
        </p>
      )}

      {/* -------------------- Выпадающая выдача -------------------- */}
      {open && query.trim().length >= 2 && (
        <div
          id="global-search-results"
          role="listbox"
          className="search-panel glass-highlight absolute left-0 right-0 top-[calc(100%+10px)] z-50 max-h-[65vh]
                     animate-slide-up overflow-y-auto rounded-2xl p-2 text-left"
        >
          {!flat.length && (
            <div className="px-4 py-6 text-center">
              <p className="text-sm text-white">{t('search:empty', { query })}</p>
              <p className="mt-1 text-xs text-white/65">{t('search:emptyHint')}</p>
            </div>
          )}

          {Object.entries(grouped).map(([type, items]) => {
            if (!items.length) return null;
            const { labelKey, Icon } = GROUP_META[type];
            return (
              <section key={type} className="mb-1 last:mb-0">
                <header className="flex items-center gap-2 px-3 pb-1 pt-2">
                  <Icon size={13} className="text-gold-400" />
                  <span className="label-eyebrow">{t(labelKey)}</span>
                  <span className="text-[11px] text-white/50">{items.length}</span>
                </header>

                <ul>
                  {items.map((entry) => {
                    const index = flat.indexOf(entry);
                    const active = index === cursor;
                    return (
                      <li key={entry.id}>
                        <button
                          type="button"
                          role="option"
                          aria-selected={active}
                          onMouseEnter={() => setCursor(index)}
                          onClick={() => goTo(entry)}
                          className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition
                                      ${active ? 'bg-tsul-600/45 ring-1 ring-gold-400/40' : 'hover:bg-white/10'}`}
                        >
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-semibold text-white">
                              <Highlight text={L(entry.title)} tokens={tokens} />
                            </p>
                            <p className="truncate text-xs text-white/75">
                              <Highlight
                                text={`${L(entry.subtitle) ?? ''}${
                                  entry.extra ? ` · ${L(entry.extra)}` : ''
                                }`}
                                tokens={tokens}
                              />
                            </p>
                          </div>
                          <div className="flex shrink-0 items-center gap-1.5 text-[11px]">
                            <span className="rounded-md border border-white/20 bg-white/10 px-2 py-0.5 text-white/80">
                              {t('search:inBuilding', { n: entry.buildingNumber })}
                            </span>
                            {entry.rooms?.[0] && (
                              <span className="rounded-md border border-gold-400/40 bg-gold-500/20 px-2 py-0.5 font-semibold text-gold-100">
                                {entry.rooms[0]}
                              </span>
                            )}
                          </div>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}
