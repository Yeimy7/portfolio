import AOS from 'aos';
import { useEffect } from "react";
import { ProjectCard } from './ProjectCard';
import { projectDetails } from '../../data/data';

export const Projects = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])

    return (
        <section className="section__projects sections">
            <h2 className="title__section" data-aos="flip-down" data-aos-duration="1000">Proyectos</h2>
            <div className="container__cards-projects">
                {projectDetails.map((project) => (
                    <ProjectCard key={project.id}
                        data_aos="zoom-in"
                        duration_aos="1000"
                        urlProject={project.link}
                        urlRepo={project.repository}
                        img={project.img_dark_theme}
                        alt={project.alt}
                        title={project.title} />
                ))}
            </div>
        </section>
    )
}
