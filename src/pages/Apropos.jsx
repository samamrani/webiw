import React from "react";
import "../Styles/Apropos.css";
import { Helmet } from "react-helmet";
import heroImage from "../Images/img.jpg"; 

function Apropos() {
  const valeurs = [
    { icon: "bi-lightning-fill", label: "Innovation" },
    { icon: "bi-award-fill", label: "Qualité" },
    { icon: "bi-palette-fill", label: "Créativité" },
    { icon: "bi-emoji-smile-fill", label: "Satisfaction client" },
  ];

  const services = [
    {
      title: "Sites Web",
      desc: "Création de sites modernes et responsives, adaptés à tous les écrans.",
    },
    {
      title: "Applications Web",
      desc: "Développement sur mesure d'applications web performantes et sécurisées.",
    },
    {
      title: "Identité Visuelle",
      desc: "Design graphique et branding pour renforcer votre image de marque.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>WebCraft - À propos</title>
        <meta
          name="description"
          content="Découvrez les services de WebCraft, agence web spécialisée dans la création de sites, applications web et identité visuelle."
        />
      </Helmet>

      <section
         className="hero text-light d-flex align-items-center text-center"
  style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
       
      >
        <div className="container" data-aos="fade-up">
          <h1 className="display-4 fw-bold mb-5">
            À propos de <span className="text-primary">WebCraft</span>
          </h1>
          <p className="lead">
            WebCraft transforme vos idées en expériences digitales uniques et performantes. <br />
            Nous créons des sites web, applications et identités visuelles modernes et responsives.
          </p>
        </div>
      </section>

      <div className="container py-5 mb-4">
        <section className="mb-5 text-center">
          <h2 className="text-secondary mb-4 fw-bold">Nos valeurs</h2>
          <div className="row justify-content-center">
            {valeurs.map((v, i) => (
              <div key={i} className="col-md-3 mb-3">
                <div className="card h-100 border-1 shadow p-3 text-center">
                  <i className={`bi ${v.icon} fs-1 text-primary mb-3`}></i>
                  <h5 className="card-title">{v.label}</h5>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-secondary mb-4 fw-bold">Ce que nous proposons</h2>
          <div className="row">
            {services.map((s, i) => (
              <div key={i} className="col-md-4 mb-4">
                <div className="card h-100 shadow border-1">
                  <div className="card-body">
                    <h5 className="card-title text-primary fw-bold">{s.title}</h5>
                    <p className="card-text text-muted">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Apropos;
