import { Component } from 'react';

/**
 * Граница ошибок.
 *
 * Без неё любая ошибка рендера размонтирует всё дерево React, и пользователь
 * видит пустой экран с одним лишь фоном — без единой подсказки, что случилось.
 * Диагностировать такое по скриншоту невозможно, поэтому здесь ошибка
 * показывается на экране: текст, место падения и кнопки восстановления.
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    this.setState({ info });
    // Дублируем в консоль — пригодится при удалённой диагностике
    console.error('[TSUL Campus] ошибка рендера:', error, info?.componentStack);
  }

  reload = () => {
    try {
      sessionStorage.removeItem('tsul.cacheReload');
    } catch {
      /* приватный режим — просто перезагружаемся */
    }
    window.location.replace(
      window.location.pathname + '?v=' + Date.now() + window.location.hash
    );
  };

  goHome = () => {
    window.location.hash = '#/';
    this.setState({ error: null, info: null });
  };

  render() {
    const { error, info } = this.state;
    if (!error) return this.props.children;

    return (
      <div className="flex min-h-dvh items-center justify-center p-5">
        <div className="glass-panel w-full max-w-lg rounded-2xl p-6 text-center">
          <p className="label-eyebrow">TSUL Campus</p>
          <h1 className="mt-2 font-display text-xl font-bold text-white">
            Что-то пошло не так
          </h1>
          <p className="mt-2 text-sm text-white/70">
            Страница не смогла отобразиться. Обновите её — если ошибка повторится,
            покажите этот текст разработчику.
          </p>

          <pre className="mt-4 max-h-52 overflow-auto rounded-xl border border-white/15 bg-tsul-950/70 p-3 text-left text-[11px] leading-relaxed text-gold-200">
            {String(error?.message || error)}
            {info?.componentStack ? '\n' + info.componentStack.slice(0, 600) : ''}
          </pre>

          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <button type="button" onClick={this.reload} className="btn-primary">
              Обновить страницу
            </button>
            <button type="button" onClick={this.goHome} className="btn-ghost">
              На главную
            </button>
          </div>
        </div>
      </div>
    );
  }
}
