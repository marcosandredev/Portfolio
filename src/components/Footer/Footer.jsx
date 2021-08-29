import s from './Footer.module.scss';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaTwitterSquare,
  FaLinkedinIn,
  FaInstagramSquare,
} from 'react-icons/fa';

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.copyright}>
          <h3>Designed and Developed by Marcos André</h3>
        </div>

        <div className={s.copyright}>
          <h3>Copyright © {year}</h3>
        </div>

        <div className={s.body}>
          <ul className={s.socialIcons}>
            <li>
              <a
                href="https://github.com/marcosandredev"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/marcosss_andre"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitterSquare />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/marcs__andre/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagramSquare />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/marcosandredev/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
