import projectCollection from '../assets/projectCollection.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faHtml5 } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
  const renderProjects = (project, index) => (
    <figure className="card" key={index}>
      <div className="card__img">
        <img src={project.img} alt={project.name} />
      </div>

      <section className="card__body">
        <div className="card__title">
          <h3>{project.name}</h3>
        </div>
        <figcaption className="card__desc">
          <p>{project.description}</p>
        </figcaption>
        <div className="card__links">
          <a
            href={project.github}
            className="card__btn"
            target="_blank"
            rel="noreferrer"
          >
            <div className="icon">
              <FontAwesomeIcon icon={faGithub} />
            </div>
            <span>Github</span>
          </a>
          <a
            href={project.site}
            className="card__btn"
            target="_blank"
            rel="noreferrer"
          >
            <div className="icon">
              <FontAwesomeIcon icon={faHtml5} />
            </div>
            <span>Website</span>
          </a>
        </div>
      </section>
    </figure>
  );

  return (
    <section id="projects" className="section" data-aos="fade-up">
      <h2>Projects</h2>
      <div className="section-line"></div>
      <main className="section__container cards">
        {projectCollection.map(renderProjects)}
      </main>
    </section>
  );
};

export default Projects;
