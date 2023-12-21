import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from 'router';

const Provider = ({ children }) => {
  return (
    <RouterProvider router={router} future={{ v7_startTransition: true }}>
      {children}
    </RouterProvider>
  );
};

export default Provider;
