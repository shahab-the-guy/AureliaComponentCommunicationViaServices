import 'bootstrap';

import { RouterConfiguration, Router } from 'aurelia-router';


export class App {

  private router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {

    this.router = router;

    config.title = 'Contact Manager';

    config.map([
      { route: 'home', name: 'home', moduleId: './home/home-route', nav: true, title: 'Home' ,  },
      { route: 'login', name: 'login', moduleId: './login/login-component', nav: true, title: 'Login' ,  }
    ]);
  }
}
