import { RouterConfiguration, Router, RouteConfig, activationStrategy } from "aurelia-router";

export class ContactRoute {


  private router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {

    this.router = router;

    config.title = 'Contact Manager';

    // because these routes are loaded into the slot of layout
    // we should address them from as relative path from the src folder
    config.map([
      { route: '', name: 'contacts', moduleId: 'contacts/contact-main', nav: true, title: 'Contacts' },
      {
        route: 'new', name: 'new_contact', moduleId: 'contacts/contact-new', nav: true, title: 'Add New Contact',
        activationStrategy: activationStrategy.invokeLifecycle
      },
      { route: ':id', name: 'contactDetails', moduleId: 'contacts/contact-details', nav: false, title: '' },
      { route: ':id/edit', name: 'contactEdit', moduleId: 'contacts/contact-new', nav: false, title: '' }
    ]);
  }
}
