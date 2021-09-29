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
          <a className="text-white" href="#">
            About Me
          </a>
        </li>
        <li>
          <a className="text-white" href="#">
            Skills
          </a>
        </li>
        <li>
          <a className="text-white" href="#">
            Resume
          </a>
        </li>
        <li>
          <a className="text-white" href="#">
            Projects
          </a>
        </li>
        <li>
          <a className="text-white" href="#">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
