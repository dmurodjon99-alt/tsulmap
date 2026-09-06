import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './App.jsx';
import './i18n'; // инициализация i18next должна произойти до первого рендера
import './styles/index.css';

/**
 * Обычный хостинг отдаёт index.html на любой путь → BrowserRouter с чистыми URL.
 * Single-file сборка (Claude Artifacts и подобные) такого fallback не имеет,
 * поэтому там используется HashRouter: /#/building/building-1.
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router basename={basename}>
      <App />
    </Router>
  </React.StrictMode>
);
