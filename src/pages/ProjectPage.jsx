import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function ProjectPage({ project }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);

  return (
    <>
      <main>
        <section className="project">
          <div className="project__content">
            <h1 className="project__name">{project.project__name}</h1>
            <div className="project__info">
              <p className="project__sub">{project.project__sub}</p>
            </div>
            <div className="project__cta">
              <a
                href={project.projectLiveLink}
                target="_blank"
                className="button"
              >
                Project link
              </a>
            </div>
          </div>
        </section>

        <section id="project-overview" className="project-overview ">
          <div className=" project-overview__main">
            <div className="project-overview__content">
              <div className="project-overview__img">
                <img
                  src={project.imgSrc}
                  alt={project.project__name}
                  className="project-overview__image"
                />
              </div>
              <div className="project-overview__description">
                <div className="project-overview__info">
                  <h3 className="project-overview__heading">
                    Project Overview
                  </h3>
                  <div className="project-overview__para">
                    {project.project_overview__sub.map((sub, index) => (
                      <p key={index} className="project-overview__sub p">
                        {sub}
                      </p>
                    ))}
                  </div>
                </div>

                <div id="tools" className="project-overview__myskills">
                  <h3 className="project-overview__heading">Tools Used</h3>
                  <div className="project-overview__skills">
                    {project.project_overview__skill.map((skill, index) => {
                      return (
                        <div key={index} className="project-overview__skill">
                          {skill}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="project-overview__links">
                  <h3 className="project-overview__heading">See Live</h3>
                  <div className="project-overview__links-wrapper">
                    <div className="project-overview__link">
                      <a
                        href={project.projectLiveLink}
                        target="_blank"
                        className="button button--med"
                      >
                        Project link
                      </a>
                    </div>
                    <div className="project-overview__link">
                      <Link
                        to="/#projects"
                        className="button button--med button--theme-reverse"
                      >
                        Go back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
