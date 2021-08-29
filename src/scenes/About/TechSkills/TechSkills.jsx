import s from './TechSkills.module.scss';
import {
  DiJavascript1,
  DiReact,
  DiGit,
  DiDotnet,
  DiHtml5,
  DiCss3
} from 'react-icons/di';
import {
  SiRedux,
} from 'react-icons/si';

const TechSkills = () => {
  return (
    <ul className={s.container}>
      <li className={s.techIcon}>
        <DiJavascript1 />
      </li>
      <li className={s.techIcon}>
        <DiReact />
      </li>
      <li className={s.techIcon}>
        <SiRedux />
      </li>
      <li className={s.techIcon}>
        <DiDotnet />
      </li>
      <li className={s.techIcon}>
        <DiGit />
      </li>
      <li className={s.techIcon}>
        <DiHtml5 />
      </li>
      <li className={s.techIcon}>
        <DiCss3 />
      </li>
    </ul>
  );
};

export default TechSkills;
