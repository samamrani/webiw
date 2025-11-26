import React, { useState } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Apropos from "../components/Apropos";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Loading from "../components/Loading"; //spinner

function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const [loading, setLoading] = useState(false);

  // Fonction pour changer de section avec le spinner
  const handleSectionChange = (section) => {
    setLoading(true); // Affiche le spinner
    setTimeout(() => {
      setActiveSection(section); // Change la section
      setLoading(false); // Cache le spinner
    }, 500); // Durée du spinner en ms (ajustable)
  };

  return (
    <div>
      <Header setActiveSection={handleSectionChange} /> 

   <main className="mt-5">


        {loading ? (
          <Loading /> 
        ) : (
          <>
            {activeSection === "hero" && <HeroSection setActiveSection={handleSectionChange}/>}
            {activeSection === "apropos" && <Apropos />}
            {activeSection === "services" && <Services />}
            {activeSection === "contact" && <Contact />}
          </>
        )}
      </main>
    </div>
  );
}

export default Home;
