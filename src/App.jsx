import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import HomePage from './pages/HomePage.jsx';
import BuildingPage from './pages/BuildingPage.jsx';

/**
 * Маршрутизация портала:
 *   /                              — hero, глобальный поиск, выбор здания
 *   /building/:slug                — карточки подразделений здания (+ drawer ?unit=)
 */
export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/building/:slug" element={<BuildingPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}
