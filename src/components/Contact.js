// import emailjs from "@emailjs/browser";

import AOS from 'aos';
import { useState, useEffect } from "react";
import imagenContacto from '../assets/imagenContacto.svg'
import { ModalForm } from "./ModalForm";

export const Contact = ({ indication }) => {
  const initialState = { name: "", surname: "", user_email: "", message: "" };
  const [datosFormulario, setDatosFormulario] = useState(initialState);
  const [displayModal, setDisplayModal] = useState(false);
  const mainSectionLayout = indication

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])

  const handleChange = (e) => {
    setDatosFormulario({
      ...datosFormulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target)
    fetch(e.target.action, {
      method: 'POST',
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(response => {
        setDatosFormulario(initialState);
        setDisplayModal(true);
      })
      .catch(error => {
        console.log("Oops! There was a problem submitting your form")
      });


  };
  return (
    <section className="section__contact sections">
      {displayModal && <ModalForm setDisplayModal={setDisplayModal} />}
      <div className="container__title-alert">
        <h2 className="title__section" data-aos="flip-down" data-aos-duration="1000">
          Contacto
        </h2>
        <p>(Todos los campos son obligatorios)</p>
      </div>
      <img className="img__decorative-contact" src={imagenContacto} alt=""></img>
      <div className="container__form">
        <form className="formular__contact" action='https://formspree.io/f/xwkyzoqw' method="POST" onSubmit={handleSubmit}>
          <div className="row">
            <div className="column">
              <label htmlFor="name">
                Nombre*
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={datosFormulario.name}
                required
                onChange={handleChange}
              ></input>
            </div>
            <div className="column">
              <label htmlFor="surname">
                Apellido*
              </label>
              <input
                type="text"
                name="surname"
                id="surname"
                value={datosFormulario.surname}
                required
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                name="user_email"
                required
                id="email"
                value={datosFormulario.user_email}
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className="column">
            <label htmlFor="message">
              Mensaje*
            </label>
            <textarea
              row="5"
              name="message"
              required
              id="message"
              value={datosFormulario.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button className="button__submit" type="submit">
            Enviar
          </button>
        </form>
        {mainSectionLayout && <div className="container__indication indication-end">
          ...and contact me
        </div>}
      </div>
    </section>
  )
}
