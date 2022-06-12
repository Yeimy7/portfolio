// import profilePicture from "../assets/profilePicture.jpg";
import profilePicture from "../assets/profile.jpg";
import { useEffect } from "react";
import { GiPaperPlane } from 'react-icons/gi';

export const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="section__about sections">
            <h2 className="title__section" data-aos="flip-down" data-aos-duration="1000">
                Sobre mí
            </h2>
            
            <div className="container__info-aboutme" >
                <GiPaperPlane></GiPaperPlane>
                <div className="container__img-profile">
                    <img src={profilePicture} alt="my profile"></img>
                </div>
                <div className="container__aboutme-text">
                    <p>
                    Estudiante de décimo semestre de la Carrera de Informática en la Universidad Mayor de San Andrés, a la que le encanta crear aplicaciones web bonitas y funcionales, apasionada por el desarrollo web frontend, buscando formar parte  de un equipo para crear productos que cambiarán al mundo y construir tecnología de software para lograrlo, al mismo tiempo, permita desarrollar mis competencias profesionales.
                      </p>
                </div>
                
            </div>
        </section>
  )
}
