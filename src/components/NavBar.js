import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import logo from '../assets/logo.png'
import { BsGithub, BsLinkedin} from "react-icons/bs";

export const NavBar = () => {
    const [hamburguerMenu, setHamburguerMenu] = useState(false);


    const handleClickOpenMenu = () => {
        setHamburguerMenu(true);
    };

    const handleClickCloseMenu = () => {
        setHamburguerMenu(false);
    };


  return (
    <>
    <button className="button__hamburguer" onClick={handleClickOpenMenu}>
        <GiHamburgerMenu />
    </button>
    <div
        className={`container__nav-menu ${hamburguerMenu && "desplazar-menu"}`}
    >
        <div className="container__border">
            <button className="close-nav-menu" onClick={handleClickCloseMenu}>
                <ImCross />
            </button>
            

            <ul className="navbar__list">
                <Link to="/" onClick={handleClickCloseMenu}>
                    <li>Inicio</li>
                </Link>
                <Link to="/projects" onClick={handleClickCloseMenu}>
                    <li>Proyectos</li>
                </Link>
                <Link to="/about" onClick={handleClickCloseMenu}>
                    <li>Sobre mi</li>
                </Link>
                <Link to="/skills" onClick={handleClickCloseMenu}>
                    <li>Tecnologías</li>
                </Link>
                <Link to="/contact" onClick={handleClickCloseMenu}>
                    <li>Contacto</li>
                </Link>
            </ul>

        </div>


    </div>

    <nav className="navbar">
        <div className="container__info-navbar">
            <Link to="/">
                <img src={logo} alt="my logo"/>
            </Link>
            
        </div>
        <div>
            <ul className="navbar__list">
                <Link to="/">
                    <li onClick={() => window.scrollTo(0, 0)}>Inicio</li>
                </Link>
                <Link to="/projects">
                    <li>Proyectos</li>
                </Link>
                <Link to="/about">
                    <li>Sobre mí</li>
                </Link>
                <Link to="/skills">
                    <li>Tecnologías</li>
                </Link>
                <Link to="/contact">
                    <li>Contacto</li>
                </Link>
            </ul>
        </div>

        <div className="container__social-media">
            <ul>
                <a
                    href="https://github.com/Yeimy7"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ir a cuenta Github Yeimy7"
                >
                    <li>
                        <BsGithub />
                    </li>
                </a>
                <a
                    href="https://www.linkedin.com/in/yeimy-gabriela-limachi-carrillo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Perfil Linkedin de Yeimy"
                >
                    <li>
                        <BsLinkedin />
                    </li>
                </a>
            </ul>
        </div>
    </nav>
</>

  )
}
