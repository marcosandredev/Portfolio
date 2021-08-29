import s from './About.module.scss';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import laptopImg from '../../assets/about-laptop.png';
import AboutTextCard from './AboutTextCard/AboutTextCard';
import TechSkills from './TechSkills/TechSkills';

const About = () => {
  return (
    <BaseLayout>
      <div className={s.content}>
        <div className={s.about}>
          <div className={s.aboutDescription}>
            <h1 className={s.title}>
              Saiba <b className={s.purple}>quem eu sou</b>
            </h1>
            <AboutTextCard />
          </div>

          <div className={s.aboutImg}>
            <img src={laptopImg} alt="about" />
          </div>
        </div>

        <h2 className={s.skills}>
          Minhas <b className={s.purple}>Skills</b>
        </h2>
        <TechSkills />
      </div>
    </BaseLayout>
  );
};

export default About;
