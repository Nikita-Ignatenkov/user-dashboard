import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/home/HomePage';
import { UserPage } from './pages/user/UserPage';
import { BlackListPage } from './pages/black-list/BlackListPage';
import { ErrorBoundary } from './components/layout/error';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'user/:id',
        element: <UserPage />,
        loader: async ({ params }) => {
          const id = params.id;
          if (!id) throw new Error('Missing user ID');
          return { id };
        },
      },
      {
        path: 'black-list',
        element: <BlackListPage />,
      },
      {
        path: '*',
        element: <ErrorBoundary />,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
