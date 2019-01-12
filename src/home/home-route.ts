import { RouterConfiguration, Router } from "aurelia-router";

export class HomeRoute{

  private router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {

    this.router = router;

    config.title = 'Contact Manager';

    config.map([
      { route: [''], name: 'home', moduleId: './home', nav: true, title: 'Home' ,  }, 
      { route: ['contacts'], name: 'contacts', moduleId: '../contacts/contact-route', nav: true, title: 'Contacts' ,  }
    ]);
  }
}
