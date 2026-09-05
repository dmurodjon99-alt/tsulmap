import { useTranslation } from 'react-i18next';

/**
 * Бейдж «перевод готовится».
 *
 * Показывается там, где значение было получено не на выбранном языке, а по
 * цепочке фолбэков. Это честнее, чем молча подставлять другой язык: студент
 * видит, что текст временно на русском, и не считает это ошибкой сайта.
 */
export default function TranslationNotice({ isFallback, className = '' }) {
  const { t } = useTranslation();
  if (!isFallback) return null;

  return (
    <span
      title={t('common:translationPending')}
      className={`glass-chip ml-2 inline-flex shrink-0 translate-y-[-1px] items-center gap-1 rounded-full px-2 py-0.5
                  text-[10px] font-medium uppercase tracking-wide text-gold-200/90 ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
      {t('common:translationPendingShort')}
    </span>
  );
}
