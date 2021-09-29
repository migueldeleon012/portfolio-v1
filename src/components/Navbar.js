const Navbar = () => {
  return (
    <nav className="nav bg-black">
      <div className="burger">
        <div className="burger__line"></div>
        <div className="burger__line"></div>
        <div className="burger__line"></div>
      </div>
      <ul>
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
