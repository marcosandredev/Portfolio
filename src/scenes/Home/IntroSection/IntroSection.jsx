import s from './IntroSection.module.scss';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaTwitterSquare,
  FaLinkedinIn,
  FaInstagramSquare,
} from 'react-icons/fa';

const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            UM POUCO<span className={s.purple}> SOBRE </span>{' '}
            MIM
          </h1>

          <div className={s.description}>
            <p>
             Meu nome é Marcos André, sou um estudante de Sistemas de Informação,
             apaixonado por programação, tecnologia, minimalismo, séries, filmes, livros,
              música e programação! 💻
            </p>

            <p>
              Atualmente trabalho como desenvolvedor
              <i>
                <b className={s.purple}>
                  {' '}
                  Web
                </b>
              </i>
            </p>

            <p>
              Um apaixonado desenvolvedor de software Full Stack 🚀 <br />Eu
              tenho experiência com{' '}
              <i>
                <b className={s.purple}>Web</b>
              </i>{' '}
              utilizando
              <br />
              <i>
                <b className={s.purple}>
                  C#, Reactjs, .Net
                </b>
              </i>{' '}
              e algumas outras bibliotecas legais
            </p>
          </div>
        </div>

        {/* <Tilt trackOnWindow={true}>
          <LazyLoadImage alt="avatar" effect="blur" src={avatar} />
        </Tilt> */}
      </div>

      <div className={s.introSocial}>
        <h1>ME ENCONTRE EM</h1>
        <p>
        Sinta-se à vontade para se <span className={s.purple}>conectar </span>comigo
        </p>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="https://github.com/marcosandredev"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <AiFillGithub />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://twitter.com/marcosss_andre"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaTwitterSquare />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.instagram.com/marcs__andre/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaInstagramSquare />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/in/marcosandredev/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
