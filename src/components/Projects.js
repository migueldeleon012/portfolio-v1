import projectCollection from '../assets/projectCollection.json';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="section-line"></div>
      <div className="section__container">
        {projectCollection.map((project) => {
          return (
            <div className="card">
              <div className="card__img">
                <img src={project.img} alt={project.name} />
              </div>
              <div className="card__title">
                <h2>{project.name}</h2>
              </div>
              <div className="card__desc">
                <p>{project.description}</p>
              </div>
              <div className="card__links">
                <a
                  href={project.github}
                  className="btn card__btn"
                  target="_blank"
                >
                  Github
                </a>
                <a
                  href={project.site}
                  className="btn card__btn"
                  target="_blank"
                >
                  Website
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
