import { createBrowserRouter, Outlet } from 'react-router-dom';
import { Layout } from 'components';
import Home from 'pages/home';
import PushHistory from 'pages/push';
import MapPage from 'pages/map';
import Contact from 'pages/contact';
import Share from 'pages/share';
import WakeLock from 'pages/wakelock/index';
export const router = createBrowserRouter([
  {
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
        name: 'Home'
      },
      {
        path: '/push',
        element: <PushHistory />,
        name: 'Push'
      },
      {
        path: '/map',
        element: <MapPage />,
        name: 'Map'
      },
      {
        path: '/contact',
        element: <Contact />,
        name: 'Contact'
      },
      {
        path: '/share',
        element: <Share />,
        name: 'Share'
      },
      {
        path: '/wakelock',
        element: <WakeLock />,
        name: 'WakeLock'
      }
    ]
  }
]);
