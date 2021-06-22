import { lazy } from 'react';

const Login = lazy(() => import('./Login'));
const Dashboard = lazy(() => import('./Dashboard'));

export {
  Login,
  Dashboard,
};
