import 'bootstrap';

import { RouterConfiguration, Router } from 'aurelia-router';


export class App {

  private router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {

    this.router = router;

    config.title = 'Contact Manager';
    config.options.pushState = false;
    config.options.root = '/';

    config.mapUnknownRoutes(
      './shared/routes/not-found.html');

    config.map([
      { route: '', redirect: 'welcome' },
      {
        route: 'welcome',
        name: 'welcome',
        moduleId: './routes/welcome/welcome',
        nav: 1, title: 'Home',
        // layoutView: './layouts/default.html',
        layoutViewModel: './layouts/default'
      },
      {
        route: 'contacts',
        name: 'contacts',
        moduleId: './contacts/routes/route-configuration',
        nav: 2, title: 'Contacts',
        // layoutView: './layouts/default.html',
        layoutViewModel: './layouts/default'
      },
      {
        route: 'login',
        name: 'login',
        moduleId: './routes/login/login-component',
        nav: 3, title: 'Login'
      }
    ]);
  }
}
