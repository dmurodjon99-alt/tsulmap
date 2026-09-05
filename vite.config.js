import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';
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

  return {
    plugins: [react(), ...(singleFile ? [viteSingleFile()] : [])],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    // GitHub Pages публикует проект в подкаталоге /<repo>/ — путь приходит
    // из workflow в VITE_BASE. Для хостингов с корневым доменом (Netlify,
    // Vercel, Cloudflare) достаточно относительных путей.
    base: process.env.VITE_BASE || './',
    define: {
      'import.meta.env.VITE_HASH_ROUTER': JSON.stringify(singleFile ? '1' : '0'),
    },
    build: {
      // Для single-file инлайним вообще все ассеты, включая 9,5 МБ видео
      assetsInlineLimit: singleFile ? 100 * 1024 * 1024 : 4096,
      chunkSizeWarningLimit: singleFile ? 20000 : 900,
    },
    server: { port: 5173, open: true },
  };
});
