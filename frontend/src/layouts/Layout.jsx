import { Outlet } from "react-router-dom";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../Styles/Layout.css";

function Layout() {
  return (
    <div className="layout-container">
      <Header />
        <main>
          <Outlet/>
        </main>
      <Footer />
    </div>
  );
}

export default Layout;
