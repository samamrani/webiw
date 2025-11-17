import React from "react";
import "aos/dist/aos.css";
import heroImage from "../Images/img.jpg";

function Services() {
  const services = [
    {
      title: "Sites Web",
      desc: "Création de sites modernes, rapides et adaptés à tous les écrans.",
      icon: "bi bi-laptop",
    },
    {
      title: "Applications Web",
      desc: "Développement sur mesure d'applications performantes et sécurisées.",
      icon: "bi bi-code-slash",
    },
    {
      title: "Identité Visuelle",
      desc: "Design graphique et branding pour renforcer votre image de marque.",
      icon: "bi bi-palette",
    },
  ];

  return (
    <>
     
      <section
        className="hero text-light d-flex align-items-center justify-content-center text-center text-primary"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "40vh",
          paddingTop: "180px",
          paddingBottom: "1rem",
        }}
      >
        <div className="container" data-aos="fade-up">
          <h1 className="display-4 fw-bold mb-3 text-primary">Nos Services</h1>
          <p className="lead">
            Découvrez comment nous donnons vie à vos projets numériques avec
            passion, créativité et expertise.
          </p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row g-4 justify-content-center">
            {services.map((service, i) => (
              <div
                key={i}
                className="col-md-4 col-sm-6"
                data-aos="zoom-in"
                data-aos-delay={i * 150}
              >
                <div className="card border-0 shadow-lg h-100 text-center p-4 hover-card">
                  <div className="icon mb-3 text-primary fs-1">
                    <i className={service.icon}></i>
                  </div>
                  <h5 className="fw-bold mb-3">{service.title}</h5>
                  <p className="text-muted">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
