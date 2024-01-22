import React from 'react';
import TabBar from './TabBar';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="flex h-dvh w-dvw flex-col">
      <Header />
      <main className="flex-grow p-4">{children}</main>
      <TabBar />
    </div>
  );
};

export default Layout;
