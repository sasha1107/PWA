import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';

const TabBar = () => {
  const icons = {
    Home: <HomeIcon />,
    Map: <GpsFixedIcon />,
    Push: <NotificationsIcon />,
    MyPage: <PersonIcon />
  };
  const routes = [
    {
      path: '/',
      name: 'Home'
    },
    {
      path: '/gps',
      name: 'Map'
    },
    {
      path: '/push',
      name: 'Push'
    },
    {
      path: '/my',
      name: 'MyPage'
    }
  ];
  return (
    <footer className="fixed bottom-0 grid w-full grid-cols-4 divide-x bg-white">
      {routes.map((route, index) => {
        return (
          <NavLink
            key={index}
            to={route.path}
            className={({ isActive, isPending, isTransitioning }) =>
              [
                isPending ? 'text-slate-300' : '',
                isActive ? 'text-slate-500' : '',
                isTransitioning ? 'text-red-500' : '',
                'flex h-[56px] items-center justify-center border'
              ].join(' ')
            }
            unstable_viewTransitions
          >
            <span className="text-sm">{icons[route.name]}</span>
          </NavLink>
        );
      })}
    </footer>
  );
};

export default TabBar;
