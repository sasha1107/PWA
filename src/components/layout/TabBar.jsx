import React from "react";
import { router } from "router";
import { NavLink } from "react-router-dom";

const TabBar = () => {
  const elements = router.routes[0].children;
  return (
    <nav className="grid grid-cols-4 divide-x">
      {elements.map((route, index) => {
        return (
          <NavLink
            key={index}
            to={route.path}
            className={({ isActive, isPending, isTransitioning }) =>
              [
                isPending ? "text-slate-300" : "",
                isActive ? "text-blue-500" : "",
                isTransitioning ? "text-red-500" : "",
              ].join(" ")
            }
            unstable_viewTransitions
          >
            {route.name}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default TabBar;
