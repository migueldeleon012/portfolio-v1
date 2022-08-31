import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer text-white">
      <main className="footer__socials">
        <div className="social facebook">
          <a
            rel="noreferrer"
            className="text-white"
            href="https://www.facebook.com/profile.php?id=100009912155567"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        </div>
        <div className="social instagram">
          <a
            className="text-white"
            href="https://www.instagram.com/the_lion012/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <div className="social linkedin">
          <a
            className="text-white"
            href="https://www.linkedin.com/in/miguel-de-leon-178b77202/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
        <div className="social github">
          <a
            className="text-white"
            href="https://github.com/migueldeleon012"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </main>
      <p>© Miguel de Leon</p>
    </footer>
  );
};

export default Footer;
