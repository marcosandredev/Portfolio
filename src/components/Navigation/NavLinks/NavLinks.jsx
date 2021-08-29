import s from './NavLinks.module.scss';
import {
  AiOutlineHome,
  AiOutlineUser,
} from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';
import { routes } from '../../../routes/BaseRoutes';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return (
    <ul className={s.navBar}>
      <li>
        <NavLink to={routes.HOME} activeClassName={s.active} exact>
          <AiOutlineHome />
          Início
        </NavLink>
      </li>

      <li>
        <NavLink to={routes.ABOUT} activeClassName={s.active}>
          <AiOutlineUser />
          Sobre
        </NavLink>
      </li>

      <li>
        <NavLink to={routes.RESUME} activeClassName={s.active}>
          <CgFileDocument />
          Currículo
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
