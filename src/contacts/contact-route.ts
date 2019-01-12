import { RouterConfiguration, Router } from "aurelia-router";

export class ContactRoute {


  private router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {

    this.router = router;

    config.title = 'Contact Manager';

    config.map([
      { route: '', moduleId: 'contacts/contact-main', nav: false, title: '' },
      { route: 'new', moduleId: 'contacts/contact-new', nav: false, title: '' },
      { route: ':id', moduleId: 'contacts/contact-details', nav: false, title: '' },
      { route: ':id/edit', moduleId: 'contacts/contact-edit', nav: false, title: '' }
    ]);
  }
}
