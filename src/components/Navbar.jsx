import { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const onBurgerClickHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="nav bg-black">
      <Link
        className="nav__logo"
        to="header"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <img src="img/logo.svg" alt="miguel de leon logo" />
      </Link>
      <div className="burger" onClick={onBurgerClickHandler}>
        <div className="burger__line"></div>
        <div className="burger__line"></div>
        <div className="burger__line"></div>
      </div>
      <ul className={isActive ? 'active' : ''}>
        <li>
          <Link
            className="text-white"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            className="text-white"
            to="resume"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Resume
          </Link>
        </li>
        <li>
          <Link
            className="text-white"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className="text-white"
            to="contacts"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
