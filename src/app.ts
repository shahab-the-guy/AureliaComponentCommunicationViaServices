import 'bootstrap';

import { RouterConfiguration, Router } from 'aurelia-router';


export class App {

  private router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {

    this.router = router;

    config.title = 'Contact Manager';
    config.options.pushState = false;
    config.options.root = '/';

    config.mapUnknownRoutes('./welcome/not-found.html');

    config.map([
      { route: '', redirect: 'welcome' },
      {
        route: 'welcome',
        name: 'welcome',
        moduleId: './welcome/welcome',
        nav: 1, title: 'Home',
        // layoutView: './layouts/default.html',
        layoutViewModel: './layouts/default'
      },
      {
        route: 'contacts',
        name: 'contacts',
        moduleId: './contacts/contact-route',
        nav: 2, title: 'Contacts',
        // layoutView: './layouts/default.html',
        layoutViewModel: './layouts/default'
      },
      {
        route: 'login',
        name: 'login',
        moduleId: './login/login-component',
        nav: 3, title: 'Login'
      }
    ]);
  }
}
