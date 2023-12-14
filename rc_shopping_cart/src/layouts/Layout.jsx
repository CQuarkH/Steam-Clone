import React from "react";
import Header from "./layout-components/Header";

function Layout({ children }) {
  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <main className="flex flex-1">{children}</main>
    </div>
  );
}

export default Layout;
