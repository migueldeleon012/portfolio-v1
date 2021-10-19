import projectCollection from '../assets/projectCollection.json';

const Projects = () => {
  return (
    <section id="projects" className="section" data-aos="fade-up">
      <h2>Projects</h2>
      <div className="section-line"></div>
      <div className="section__container cards">
        {projectCollection.map((project, index) => {
          return (
            <div className="card" key={index}>
              <div className="card__img">
                <img src={project.img} alt={project.name} />
              </div>

              <div className="card__body">
                <div className="card__title">
                  <h3>{project.name}</h3>
                </div>
                <div className="card__desc">
                  <p>{project.description}</p>
                </div>
                <div className="card__links">
                  <a
                    href={project.github}
                    className="btn card__btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                  <a
                    href={project.site}
                    className="btn card__btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Website
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
