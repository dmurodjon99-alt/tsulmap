import { useEffect, useRef, useState } from 'react';
import { HERO_VIDEO } from '../../media/assets.js';

/**
 * Видео-заставка первого экрана: аэросъёмка кампуса ТГЮУ.
 *
 * Особенности реализации:
 *  • full-bleed — блок выходит за контейнер на всю ширину окна (`w-screen`),
 *    поэтому у <body> задан `overflow-x: clip` (в отличие от `hidden` он не
 *    ломает `position: sticky` у шапки);
 *  • блок поднят вверх отрицательным сдвигом, чтобы видео уходило под шапку;
 *  • сверху — синий градиент, снизу — уход в цвет страницы: заставка
 *    заканчивается ровно перед блоком «Учебные здания»;
 *  • при `prefers-reduced-motion` видео не запускается автоматически —
 *    остаётся статичный кадр.
 */
export default function HeroVideo() {
  const videoRef = useRef(null);
  const [reducedMotion] = useState(
    () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
  );

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reducedMotion) return;
    // Некоторые браузеры блокируют autoplay до взаимодействия — пробуем явно.
    video.play().catch(() => {});
  }, [reducedMotion]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-0 z-0 w-screen -translate-x-1/2
                 -translate-y-[110px] overflow-hidden"
      style={{ height: 'calc(100% + 190px)' }}
    >
      <video
        ref={videoRef}
        src={HERO_VIDEO}
        muted
        loop
        playsInline
        autoPlay={!reducedMotion}
        preload="auto"
        className="h-full w-full scale-105 object-cover"
      />

      {/* Затемнение: обеспечивает контраст заголовка и поиска поверх видео */}
      <div className="absolute inset-0 bg-gradient-to-b from-tsul-950/90 via-tsul-950/55 to-tsul-950" />
      {/* Фирменный синий подтон + виньетка по краям */}
      <div className="absolute inset-0 bg-tsul-900/35 mix-blend-multiply" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 80% at 50% 35%, transparent 40%, rgba(4,18,43,0.75) 100%)',
        }}
      />
    </div>
  );
}
