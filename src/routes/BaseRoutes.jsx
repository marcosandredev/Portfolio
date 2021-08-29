import { lazy } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

//scenes
const Home = lazy(() => import('../scenes/Home/Home'));
const About = lazy(() => import('../scenes/About/About'));
const Resume = lazy(() => import('../scenes/Resume/Resume'));

export const routes = {
  HOME: '/',
  ABOUT: '/about',
  RESUME: '/resume',
};

const BaseRoutes = () => {
  const location = useLocation();
  const background = location.state?.background;

  return (
    <>
      <Switch location={background || location}>
        <Route path={routes.HOME} exact component={Home} />
        <Route path={routes.ABOUT} component={About} />
        <Route path={routes.RESUME} component={Resume} />
      </Switch>
    </>
  );
};

export default BaseRoutes;
