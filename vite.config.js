import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';
import legacy from '@vitejs/plugin-legacy';
import { fileURLToPath, URL } from 'node:url';

/**
 * Две сборки одного приложения:
 *
 *  • `npm run build`          — обычная сборка для статического хостинга
 *                               (Netlify / Vercel / GitHub Pages / Cloudflare).
 *  • `npm run build:artifact` — всё в ОДНОМ .html: JS, CSS, логотипы и видео
 *                               инлайнятся base64. Нужно для площадок, которые
 *                               принимают единственный самодостаточный файл
 *                               (Claude Artifacts и т.п.).
 *
 * В single-file режиме роутер переключается на HashRouter (`VITE_HASH_ROUTER`),
 * потому что на таких площадках нет серверного fallback на index.html.
 */
export default defineConfig(({ mode }) => {
  const singleFile = mode === 'artifact';

  // Hash-роутинг: обязателен там, где нет серверного fallback на index.html
  // (single-file сборка) и крайне желателен на GitHub Pages — см. main.jsx.
  const hashRouter = singleFile || process.env.VITE_HASH_ROUTER === '1';

  return {
    plugins: [
      react(),
      // Старые мобильные WebView (Telegram, встроенные браузеры на Android)
      // не понимают синтаксис ES2020 и падают ещё на разборе бандла — экран
      // остаётся пустым. legacy собирает вторую версию с транспиляцией и
      // полифилами, она подключается через nomodule и грузится только там,
      // где нужна. В single-file режиме не применяется: это один файл.
      ...(singleFile ? [viteSingleFile()] : [legacy({ targets: ['defaults', 'not IE 11'] })]),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    // Базовый путь обязан быть АБСОЛЮТНЫМ: у SPA маршруты имеют разную
    // глубину (/building/building-1), и относительный './assets/...' из
    // index.html превратился бы в '/building/assets/...' → 404 и белый экран.
    //   • корневой домен (Plesk, Netlify, Vercel, Cloudflare) → '/'
    //   • подкаталог (GitHub Pages) → VITE_BASE, его задаёт workflow
    //   • single-file сборка → пути не нужны, всё инлайнится
    base: process.env.VITE_BASE || (singleFile ? './' : '/'),
    define: {
      'import.meta.env.VITE_HASH_ROUTER': JSON.stringify(hashRouter ? '1' : '0'),
    },
    build: {
      // Для single-file инлайним вообще все ассеты, включая 9,5 МБ видео
      assetsInlineLimit: singleFile ? 100 * 1024 * 1024 : 4096,
      chunkSizeWarningLimit: singleFile ? 20000 : 900,
    },
    server: { port: 5173, open: true },
  };
});
