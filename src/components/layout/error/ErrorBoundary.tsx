import { Link } from 'react-router-dom';

export const ErrorBoundary = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">
          Произошла ошибка
        </h1>
        <p className="text-gray-600 mb-6">
          Пожалуйста, попробуйте позже или перезагрузите страницу.
        </p>
        <div className="space-y-3">
          <button
            onClick={() => window.location.reload()}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
          >
            Перезагрузить страницу
          </button>
          <Link
            to="/"
            className="block w-full border border-gray-300 py-2 px-4 rounded hover:bg-gray-50 transition-colors"
          >
            На главную
          </Link>
        </div>
      </div>
    </div>
  );
};