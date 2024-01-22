import React from 'react';
import { router } from 'router';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import NotificationsIcon from '@mui/icons-material/Notifications';

const TabBar = () => {
  const elements = router.routes[0].children;
  const icons = {
    Home: <HomeIcon />,
    Map: <GpsFixedIcon />,
    Push: <NotificationsIcon />
  };
  return (
    <nav className="grid h-10 grid-cols-4 divide-x">
      {elements.map((route, index) => {
        return (
          <NavLink
            key={index}
            to={route.path}
            className={({ isActive, isPending, isTransitioning }) =>
              [
                isPending ? 'text-slate-300' : '',
                isActive ? 'text-blue-500' : '',
                isTransitioning ? 'text-red-500' : '',
                'flex items-center justify-center'
              ].join(' ')
            }
            unstable_viewTransitions
          >
            {icons[route.name]}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default TabBar;
