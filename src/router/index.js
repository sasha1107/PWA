import { createBrowserRouter, Outlet } from 'react-router-dom';
import { Layout } from 'components';
import Home from 'pages/home';
import PushHistory from 'pages/push';
import MapPage from 'pages/map';
import Contact from 'pages/contact';
import Share from 'pages/share';
import WakeLock from 'pages/wakelock/index';
import QrCode from 'pages/qrcode/index';
import Vibrate from 'pages/vibrate/index';
import Speech from 'pages/speech/index';
import Network from 'pages/network/index';
import MyPage from 'pages/my/index';
import Bluetooth from 'pages/bluetooth/index';
import Gyroscope from 'pages/gyroscope/index';

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
        path: '/gps',
        element: <MapPage />,
        name: 'Gps'
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
      },
      {
        path: '/qrcode',
        element: <QrCode />,
        name: 'QrCode'
      },
      {
        path: '/vibrate',
        element: <Vibrate />,
        name: 'Vibrate'
      },
      {
        path: '/speech',
        element: <Speech />,
        name: 'Speech'
      },
      {
        path: '/network',
        element: <Network />,
        name: 'Network'
      },
      {
        path: '/my',
        element: <MyPage />,
        name: 'My'
      },
      {
        path: '/bluetooth',
        element: <Bluetooth />,
        name: 'Bluetooth'
      },
      {
        path: '/gyroscope',
        element: <Gyroscope />,
        name: 'Gyroscope'
      }
    ]
  }
]);
