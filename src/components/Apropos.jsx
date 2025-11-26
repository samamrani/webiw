import React from "react";
import { Helmet } from "react-helmet";
import teamImage from "../Images/logo.png";
import team from "../Images/img.jpg";

function Apropos() {
  const valeurs = [
    { icon: "bi-lightning-charge-fill", title: "Innovation", desc: "Toujours à la pointe des technologies modernes." },
    { icon: "bi-award-fill", title: "Qualité", desc: "Des projets soignés, durables et performants." },
    { icon: "bi-people-fill", title: "Collaboration", desc: "Une équipe à l’écoute, proche de vos besoins." },
    { icon: "bi-rocket-takeoff-fill", title: "Croissance", desc: "Nous propulsons votre présence digitale vers de nouveaux sommets." },
  ];

  return (
    <>
      <Helmet>
        <title>À propos - WEBIW</title>
      </Helmet>

      <section
        className="text-light d-flex align-items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${team})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "60vh",
          textAlign: "center",
        }}
      >
        <div className="container" data-aos="fade-up">
          <h1 className="display-4 fw-bold mb-3 ">À propos de  <strong className="text-primary">WEB</strong> <strong className="text-danger">IW</strong></h1>
          <p className="lead mt-5">
            Une équipe passionnée, créative et ambitieuse.  <br />
            Notre mission : transformer vos idées en <br />expériences digitales puissantes.
          </p>
        </div>
      </section>

      <section className="py-5">
        <div className="container text-center" data-aos="fade-up">
          <h2 className="fw-bold text-primary mb-5">Nos Valeurs</h2>
          <div className="row g-4">
            {valeurs.map((v, i) => (
              <div className="col-md-3 col-sm-6" key={i}>
                <div className="card border-0 shadow h-100 p-4 hover-card">
                  <i className={`bi ${v.icon} fs-1 text-primary mb-3`}></i>
                  <h5 className="fw-bold">{v.title}</h5>
                  <p className="text-muted">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-5">
        <div className="container" data-aos="fade-up">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <h2 className="fw-bold mb-3 text-primary">Notre mission</h2>
              <p className="lead text-whit">
                Chez <strong>WebCraft</strong>, nous croyons qu’un bon design et une technologie solide
                peuvent faire grandir les entreprises.  
                Nous accompagnons nos clients à chaque étape — de l’idée initiale à la mise en ligne.
              </p>
              <p className="text-whit">
                Notre objectif est de créer des solutions sur mesure, à la fois esthétiques et performantes,
                qui génèrent un vrai impact digital.
              </p>
            </div>
            <div className="col-md-6 text-center">
              <img
                src={teamImage}
                alt="Équipe WebCraft"
                className="img-fluid rounded shadow"
                style={{ maxHeight: "350px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Apropos;
