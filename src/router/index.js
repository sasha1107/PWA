import { createBrowserRouter } from 'react-router-dom';
import Home from 'pages/home';
import PushHistory from 'pages/push';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/push',
    element: <PushHistory />,
  },
]);
