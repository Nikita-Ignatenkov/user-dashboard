import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div className="text-center mt-8">
      <h1 className="text-2xl font-bold">404 - Страница не найдена</h1>
      <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">
        Вернуться на главную
      </Link>
    </div>
  );
};