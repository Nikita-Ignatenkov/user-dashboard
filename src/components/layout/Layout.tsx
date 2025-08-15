import { Outlet } from 'react-router-dom';
import { Header } from './header/Header';

export const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto p-4 flex flex-col items-center">
        <Outlet /> {/* Здесь будут отображаться страницы */}
      </main>
    </div>
  );
};