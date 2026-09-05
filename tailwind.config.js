/**
 * Дизайн-код опирается на айдентику tsul.uz:
 * глубокий синий как основа, белый как «воздух», сдержанный золотой акцент
 * (цвет герба университета) и «стеклянные» поверхности поверх фото кампуса.
 */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        tsul: {
          950: '#04122B', // почти чёрный синий — подложка страницы
          900: '#071B3A', // фирменный тёмно-синий (шапка сайта)
          800: '#0B2A5B', // основной синий
          700: '#123C7A',
          600: '#1D4E9B', // синий для кнопок / ссылок
          500: '#2E6BC4',
          400: '#4C8DE0', // hover / фокус
          300: '#8FBAF0',
          200: '#C6DCF8',
          100: '#E8F1FD',
        },
        gold: {
          600: '#A8861B',
          500: '#C9A227', // акцент: герб, активный язык, «вы здесь»
          400: '#E0BE4C', // hover, иконки, линия маршрута
          300: '#EAD07A', // заголовки секций на тёмном фоне
          200: '#F3E2A6',
          100: '#F9F1D2', // текст поверх золотой подложки (подсветка поиска)
        },
        ink: '#0A1526',
      },
      fontFamily: {
        // Академическая типографика: антиква для заголовков, гротеск для текста
        display: ['"Playfair Display"', 'Georgia', '"Times New Roman"', 'serif'],
        sans: ['Inter', '"Segoe UI"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(4, 18, 43, 0.37)',
        'glass-lg': '0 24px 64px -12px rgba(4, 18, 43, 0.55)',
        'glass-inset': 'inset 0 1px 0 0 rgba(255,255,255,0.28)',
      },
      backdropBlur: {
        xs: '2px',
        glass: '16px',
        'glass-lg': '28px',
      },
      keyframes: {
        'fade-in': { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        'slide-up': {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'dash': { to: { strokeDashoffset: -1000 } },
        'pulse-ring': {
          '0%': { transform: 'scale(0.8)', opacity: 0.9 },
          '100%': { transform: 'scale(2.2)', opacity: 0 },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.25s ease-out both',
        'slide-up': 'slide-up 0.35s cubic-bezier(0.22, 1, 0.36, 1) both',
        'slide-in-right': 'slide-in-right 0.35s cubic-bezier(0.22, 1, 0.36, 1) both',
        dash: 'dash 22s linear infinite',
        'pulse-ring': 'pulse-ring 1.8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
