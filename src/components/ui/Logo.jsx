import { useTranslation } from 'react-i18next';
import { getLogo } from '../../media/assets.js';

/**
 * Эмблема ТГЮУ.
 *
 * Логотип существует в трёх языковых версиях и переключается вместе с языком
 * интерфейса. Сама эмблема — тёмно-синяя на прозрачном фоне, поэтому на тёмной
 * теме портала она размещается на светлой «медальонной» подложке: так
 * сохраняются фирменные цвета (в отличие от инверсии) и знак остаётся читаемым.
 */
export default function Logo({ size = 40, plate = true, className = '' }) {
  const { t, i18n } = useTranslation();
  const src = getLogo(i18n.resolvedLanguage);

  return (
    <span
      className={`inline-grid shrink-0 place-items-center overflow-hidden ${
        plate
          ? 'rounded-full bg-white/95 shadow-glass ring-1 ring-white/50 backdrop-blur-xs'
          : ''
      } ${className}`}
      style={{ width: size, height: size, padding: plate ? Math.round(size * 0.08) : 0 }}
    >
      <img
        src={src}
        alt={t('common:university')}
        width={size}
        height={size}
        className="h-full w-full object-contain"
        loading="eager"
        decoding="async"
      />
    </span>
  );
}
