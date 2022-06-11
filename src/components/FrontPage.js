import { Link } from "react-router-dom";
import scrollDown from '../assets/scroll.jpg'
import 'animate.css';

export const FrontPage = () => {
    return (
        <section className="section__portada sections">
            <div className="container__portada">
                <div className="cuadrado box"></div>
                <div className="cuadradito box"></div>
                <div className="cuadradito2 box"></div>
                <p>Hola, soy</p>
                <h1>
                    <span>Y</span>eimy <span>L</span>imachi <span>C</span>arrillo
                </h1>
                <p>
                    <span className="tag__text">&lt;p&gt;</span>
                    Desarrolladora FullStack
                    <span className="tag__text">&lt;/p&gt;</span>
                </p>
                <div className="container__link">
                    <Link to="/contact" className="link__contact">
                        Contáctame!
                    </Link>
                </div>
                <div className="scroll-down">
                    <img className="animate__bounce" src={scrollDown} alt='scroll down'/>
                </div>
            </div>

        </section>
    )
}
