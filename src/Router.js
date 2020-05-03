import SimpleReactRouter from 'simple-react-router';

// Pages
import { HomePage } from './modules/main/pages/HomePage';
import { NotFound } from './modules/main/pages/NotFound';

export default class Router extends SimpleReactRouter {
  routes(map) {
    map('/', HomePage);
    map('/:path*', NotFound);
  }
}
