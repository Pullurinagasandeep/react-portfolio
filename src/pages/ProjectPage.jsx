import { projectPageData } from "../projectPageData";

export default function ProjectPage() {
  return (
    <>
      <main>
        <section className="project">
          <div className="project__content">
            <h1 className="project__name">
              {projectPageData[0].project__name}
            </h1>
            <div className="project__info">
              <p className="project__sub">{projectPageData[0].project__sub}</p>
            </div>
            <div className="project__cta">
              <a
                href="https://github.com/Pullurinagasandeep/dopefolio"
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
                  src={projectPageData[0].imgSrc}
                  alt={projectPageData[0].project__name}
                  className="project-overview__image"
                />
              </div>
              <div className="project-overview__description">
                <div className="project-overview__info">
                  <h3 className="project-overview__heading">
                    Project Overview
                  </h3>
                  <div className="project-overview__para">
                    <p className="project-overview__sub p">
                      {projectPageData[0].project_overview__sub[0]}
                    </p>
                    <p className="project-overview__sub p">
                      {projectPageData[0].project_overview__sub[1]}
                    </p>
                    <p className="project-overview__sub p">
                      {projectPageData[0].project_overview__sub[2]}
                    </p>
                    <p className="project-overview__sub p">
                      {projectPageData[0].project_overview__sub[3]}
                    </p>
                    <p className="project-overview__sub p">
                      {projectPageData[0].project_overview__sub[4]}
                    </p>
                  </div>
                </div>

                <div id="tools" className="project-overview__myskills">
                  <h3 className="project-overview__heading">Tools Used</h3>
                  <div className="project-overview__skills">
                    <div className="project-overview__skill">
                      {projectPageData[0].project_overview__skill[0]}
                    </div>
                    <div className="project-overview__skill">
                      {projectPageData[0].project_overview__skill[1]}
                    </div>
                    <div className="project-overview__skill">
                      {projectPageData[0].project_overview__skill[2]}
                    </div>
                    <div className="project-overview__skill">
                      {projectPageData[0].project_overview__skill[3]}
                    </div>
                  </div>
                </div>

                <div className="project-overview__links">
                  <h3 className="project-overview__heading">See Live</h3>
                  <div className="project-overview__links-wrapper">
                    <div className="project-overview__link">
                      <a
                        href="https://github.com/Pullurinagasandeep/dopefolio"
                        target="_blank"
                        className="button button--med"
                      >
                        Project link
                      </a>
                    </div>
                    <div className="project-overview__link">
                      <a
                        href="index.html#hero"
                        className="button button--med button--theme-reverse"
                      >
                        Go back
                      </a>
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
