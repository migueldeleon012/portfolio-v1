import { useState } from 'react';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const onBurgerClickHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="nav bg-black">
      <div className="nav__logo">
        <img src="img/logo.svg" alt="" />
      </div>
      <div className="burger" onClick={onBurgerClickHandler}>
        <div className="burger__line"></div>
        <div className="burger__line"></div>
        <div className="burger__line"></div>
      </div>
      <ul className={isActive ? 'active' : ''}>
        <li>
          <a className="text-white" href="#about">
            About Me
          </a>
        </li>
        <li>
          <a className="text-white" href="#skills">
            Skills
          </a>
        </li>
        <li>
          <a className="text-white" href="#resume">
            Resume
          </a>
        </li>
        <li>
          <a className="text-white" href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a className="text-white" href="#contacts">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
