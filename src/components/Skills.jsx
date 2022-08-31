const Skills = () => {
  return (
    <aside id="skills">
      <h2>Skills</h2>
      <div className="section-line"></div>
      <div className="section__container skills">
        <div className="section__container__skills">
          <h4>Front-end</h4>
          <span>HTML</span>
          <span>CSS</span>
          <span>Javascript</span>
          <span>React with Redux</span>
          <span>Figma</span>
          <span>Wordpress</span>
        </div>
        <div className="section__container__skills">
          <h4>Back-end</h4>
          <span>NodeJS</span>
          <span>ExpressJS</span>
          <span>PHP</span>
        </div>
        <div className="section__container__skills">
          <h4>DataBases</h4>
          <span>Mongodb</span>
          <span>MySQL</span>
        </div>
      </div>
    </aside>
  );
};

export default Skills;
