import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../Styles/Contact.css";
import sam from "../Images/logo1.png";

function Contact() {
 const [formData, setFormData] = useState({
  title: "Nouveau message depuis le portfolio",
  name: "",
  email: "",
  message: "",
});

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_k1enmbc",    
      "__ejs-test-mail-service__",     
      formData,              
      "g9mqvCOtiq6-itsF4"         
    ).then(
      () => {
        setSubmitted(true);
        setFormData({title: "", name: "", email: "", message: "" });
        alert("Message envoyé avec succès !");
      },
      (error) => {
        console.error(error);
        alert("Erreur serveur ! Vérifie EmailJS ou les infos du service.");
      }
    );
  };

  return (
    <section className="contact-page">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5 mb-4">
            <h2 className="contact-title">Contact</h2>
            <p className="contact-text">
              Ce site est un projet personnel.
              Je suis ouverte aux échanges, conseils ou retours autour du développement web.
            </p>
            <p className="contact-small">💼 LinkedIn & GitHub disponibles</p>
            <img src={sam} alt="img sam" style={{ height: "40px" }}/>
          </div>

          <div className="col-md-7">
            <form onSubmit={handleSubmit} className="contact-form">

               <input
                type="text"
                name="title"
                placeholder="Title"
                className="form-control"
                value={formData.title}
                onChange={handleChange}
                required
              />
              
              <input
                type="text"
                name="name"
                placeholder="Nom"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                className="form-control"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <div className="btn-wrapper">
                <button className="btn-contact">Envoyer</button>
              </div>
            </form>

            {submitted && (
              <p className="contact-success">Merci pour votre message 🙂</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
