/**
 * Минимальный набор иконок в виде inline-SVG.
 * Отдельная библиотека икон не подключается: так бандл остаётся лёгким,
 * а штрих иконок совпадает с толщиной линий на планах этажей.
 */
const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

const Svg = ({ children, size = 20, ...rest }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" {...base} {...rest}>
    {children}
  </svg>
);

export const SearchIcon = (p) => (
  <Svg {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.2-3.2" />
  </Svg>
);

export const CloseIcon = (p) => (
  <Svg {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Svg>
);

export const GlobeIcon = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18-2.5-2.7-2.5-15.3 0-18Z" />
  </Svg>
);

export const PinIcon = (p) => (
  <Svg {...p}>
    <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.6" />
  </Svg>
);

export const UsersIcon = (p) => (
  <Svg {...p}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3.5 20c.6-3.2 2.9-5 5.5-5s4.9 1.8 5.5 5" />
    <path d="M16 5.2a3.2 3.2 0 0 1 0 5.6M17.5 20c-.2-1.7-.7-3-1.5-4" />
  </Svg>
);

export const PhoneIcon = (p) => (
  <Svg {...p}>
    <path d="M5 4h3l1.6 4-2 1.4a12 12 0 0 0 5.9 5.9l1.4-2 4 1.6v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3 6.2 2 2 0 0 1 5 4Z" />
  </Svg>
);

export const MailIcon = (p) => (
  <Svg {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m3.8 6.8 8.2 6 8.2-6" />
  </Svg>
);

export const SendIcon = (p) => (
  <Svg {...p}>
    <path d="M21 4 3 11l7 2.6L13 21l8-17Z" />
    <path d="m10 13.6 3.4-3.4" />
  </Svg>
);

export const ClockIcon = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 1.8" />
  </Svg>
);

export const ArrowLeftIcon = (p) => (
  <Svg {...p}>
    <path d="M19 12H5m0 0 6-6m-6 6 6 6" />
  </Svg>
);

export const ArrowRightIcon = (p) => (
  <Svg {...p}>
    <path d="M5 12h14m0 0-6-6m6 6-6 6" />
  </Svg>
);

export const LayersIcon = (p) => (
  <Svg {...p}>
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m3 13 9 5 9-5" />
  </Svg>
);

export const InfoIcon = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5M12 7.6v.4" />
  </Svg>
);

export const BuildingIcon = (p) => (
  <Svg {...p}>
    <path d="M4 21V6.2a1 1 0 0 1 .7-.95l6-1.9a1 1 0 0 1 1.3.95V21" />
    <path d="M12 10.5h6.3a1 1 0 0 1 1 1V21M2.5 21h19" />
    <path d="M7 9.5h2M7 13h2M7 16.5h2M15 14h1.5M15 17.5h1.5" />
  </Svg>
);
