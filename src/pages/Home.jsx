import React from "react";
import HeroSection from '../components/HeroSection';
import HeroService from '../components/HeroService';
import Contact from '../pages/Contact';
  import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
    <Helmet>
        <title>WebCraft - Accueil</title>
        <meta
          name="description"
          content="Découvrez les services de WebCraft, agence web spécialisée dans la création de sites, applications web et identité visuelle."
        />
    </Helmet>

      <HeroSection />
        <div className="d-flex flex-column align-items-center justify-content-center text-center text-primary">
          <h1 className="fw-bold m-3" data-aos="fade-up">Nos Services</h1>
            <HeroService />
        </div>
      <Contact />
    </>
  );
}

export default Home;
