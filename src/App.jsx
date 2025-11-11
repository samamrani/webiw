import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

import Home from "./pages/Home";
import Apropos from "./pages/Apropos";
import Services from "./pages/Services";
import Contact from "./pages/Contact";


function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  // elle s'exécute à chaque changement de page
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  if (loading) {
    return <Loading />; 
  }

  return (
    <>
      <Header />
      <main style={{ paddingBottom: "80px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
