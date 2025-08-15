import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <nav className="flex justify-center gap-8">
        <Link to="/" className="hover:underline">
          Главная
        </Link>
        <Link to="/black-list" className="hover:underline">
          Чёрный список
        </Link>
      </nav>
    </header>
  );
};