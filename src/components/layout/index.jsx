import React from "react";
import TabBar from "./TabBar";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="w-dvw h-dvh flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <TabBar />
    </div>
  );
};

export default Layout;
