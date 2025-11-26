import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <Header setActiveSection={setActiveSection} />
      <main>
        <Home />
      </main>
      <Footer setActiveSection={setActiveSection} />
       <ScrollToTop /> 
    </>
  );
}

export default App;
