import React from "react";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      <div className="container">{children}</div>
    </div>
  );
};

export default Layout;
