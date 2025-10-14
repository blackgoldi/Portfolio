import { createBrowserRouter } from 'react-router-dom';
import CardPage from '../pages/cards/CardPage';
import { App } from './App';
import { RootLayout } from '../widgets/RootLayout';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '', element: <App /> },
      { path: 'cards', element: <CardPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
