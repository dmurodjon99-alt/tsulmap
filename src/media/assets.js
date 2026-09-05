/**
 * Медиа-ресурсы проекта.
 *
 * Импорт через Vite: файлы получают хеш в имени и корректный URL в проде,
 * поэтому пути не нужно дублировать в public/.
 */
import logoUz from './logo_uz.png';
import logoRu from './logo_ru.png';
import logoEn from './logo_en.png';
import heroVideo from './DJI_0013_.mp4';

/** Официальная эмблема ТГЮУ — своя версия для каждого языка. */
export const LOGOS = { uz: logoUz, ru: logoRu, en: logoEn };

/** Видео-заставка на первом экране (аэросъёмка кампуса). */
export const HERO_VIDEO = heroVideo;

export const getLogo = (lang) => LOGOS[lang] ?? LOGOS.ru;
