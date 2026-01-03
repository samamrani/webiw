import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../Styles/Layout.css";

function Layout({ children }) {
  return (
    <div className="layout-container">
      <Header />
      <main className="layout-main">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
