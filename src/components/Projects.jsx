import Project from "./Project";
import { projects } from "../projectData";

export default function Projects() {
  const projectsElements = projects.map((project) => (
    <Project key={project.id} project={project} />
  ));
  return (
    <section id="projects" className="projects sec-pad">
      <div className="projects-sec">
        <div className="heading-sec">
          <h2 className="heading-sec__main">Projects</h2>
          <p className="heading-sec__sub p">
            Here you will find some of the personal projects that I created with
            each project containing its own case study
          </p>
        </div>

        <div className="projects__content">{projectsElements}</div>
      </div>
    </section>
  );
}
