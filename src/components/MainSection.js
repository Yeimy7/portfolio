import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { About } from "./About";
import { Contact } from "./Contact";
import { FrontPage } from "./FrontPage";
import { Projects } from "./Projects/Projects";
import { Skills } from "./Skills";

export const MainSection = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <FrontPage />
      <Projects />
      <div className="separador"></div>
      <About />
      <div className="separador"></div>
      <Skills />
      <div className="separador"></div>
      <Contact />
    </>
  )
}
