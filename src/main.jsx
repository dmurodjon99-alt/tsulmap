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
const Router = import.meta.env.VITE_HASH_ROUTER === '1' ? HashRouter : BrowserRouter;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
