import React, {StrictMode, Component, ReactNode, ErrorInfo} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Application Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 text-slate-800">
          <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border border-slate-200 text-center space-y-4">
            <h2 className="text-xl font-bold text-slate-900">화면을 불러오는 중 문제가 발생했습니다</h2>
            <p className="text-sm text-slate-600">
              일시적인 네트워크 또는 스크립트 지연일 수 있습니다. 아래 버튼을 눌러 새로고침해 주세요.
            </p>
            <button
              onClick={() => {
                this.setState({ hasError: false, error: null });
                window.location.reload();
              }}
              className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-sm transition-colors cursor-pointer"
            >
              화면 다시 불러오기
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
);

