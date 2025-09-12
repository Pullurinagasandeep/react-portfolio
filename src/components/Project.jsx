import { Link } from "react-router-dom";
export default function Project({ project }) {
  return (
    <div className="project-row">
      <div className="project__image-cont">
        <img className="project__image" src={project.imgSrc} alt="project" />
      </div>
      <div className="project__dis">
        <h3 className="project__heading">{project.title}</h3>
        <p className="project__subject p">{project.description}</p>
        <div>
          <Link to={project.link} className="button button--med">
            Case Study
          </Link>
        </div>
      </div>
    </div>
  );
}
