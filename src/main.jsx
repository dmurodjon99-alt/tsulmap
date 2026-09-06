import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './App.jsx';
import ErrorBoundary from './components/layout/ErrorBoundary.jsx';
import './i18n'; // инициализация i18next должна произойти до первого рендера
import './styles/index.css';

/**
 * Обычный хостинг отдаёт index.html на любой путь → BrowserRouter с чистыми URL.
 * Single-file сборка и GitHub Pages такого fallback не имеют либо страдают от
 * кеширования отдельных страниц, поэтому там HashRouter: /#/building/building-1.
 */
const isHashRouting = import.meta.env.VITE_HASH_ROUTER === '1';
const Router = isHashRouting ? HashRouter : BrowserRouter;

/**
 * basename нужен только BrowserRouter: на GitHub Pages сайт лежит в
 * подкаталоге (/tsulmap/), и без префикса путь не совпал бы ни с одним
 * маршрутом. У HashRouter путь живёт после «#», подкаталог его не касается,
 * и basename там только сломал бы совпадение.
 */
const base = import.meta.env.BASE_URL;
const basename =
  !isHashRouting && base.startsWith('/') && base !== '/'
    ? base.replace(/\/$/, '')
    : undefined;

/**
 * Последний рубеж: ошибка вне рендера (в обработчике события, в промисе)
 * не перехватывается ErrorBoundary и может оставить пустой экран.
 * Здесь она попадает на экран вместе с текстом — иначе пользователь видит
 * только фон и сообщить о проблеме нечего.
 */
function showFatal(message) {
  const root = document.getElementById('root');
  if (!root || root.dataset.fatal === '1') return;
  root.dataset.fatal = '1';
  root.innerHTML = `
    <div style="min-height:100dvh;display:flex;align-items:center;justify-content:center;padding:20px;
                font-family:system-ui,-apple-system,'Segoe UI',sans-serif;color:#C6DCF8;">
      <div style="max-width:520px;width:100%;border:1px solid rgba(255,255,255,0.2);
                  background:rgba(7,27,58,0.85);border-radius:16px;padding:22px;text-align:center;">
        <h1 style="margin:0 0 8px;font-size:19px;color:#fff;">Что-то пошло не так</h1>
        <p style="margin:0 0 14px;font-size:14px;opacity:0.75;">
          Обновите страницу. Если ошибка повторится — покажите этот текст разработчику.
        </p>
        <pre style="margin:0 0 16px;padding:12px;border-radius:12px;text-align:left;
                    background:rgba(4,18,43,0.7);color:#F3E2A6;font-size:11px;
                    white-space:pre-wrap;word-break:break-word;max-height:200px;overflow:auto;">${String(
                      message
                    ).replace(/</g, '&lt;')}</pre>
        <button type="button" onclick="location.replace(location.pathname+'?v='+Date.now()+location.hash)"
                style="border:1px solid rgba(255,255,255,0.25);background:rgba(255,255,255,0.12);
                       color:#fff;border-radius:12px;padding:10px 20px;font-size:15px;">
          Обновить страницу
        </button>
      </div>
    </div>`;
}

window.addEventListener('error', (e) => {
  if (e.message) showFatal(e.message + (e.filename ? `\n${e.filename}:${e.lineno}` : ''));
});
window.addEventListener('unhandledrejection', (e) => showFatal('Promise: ' + e.reason));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Router basename={basename}>
        <App />
      </Router>
    </ErrorBoundary>
  </React.StrictMode>
);
