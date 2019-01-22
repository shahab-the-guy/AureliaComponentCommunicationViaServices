import { RouterConfiguration, Router, RouteConfig, activationStrategy } from "aurelia-router";

export class ContactRouteConfiguration {


  private router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {

    this.router = router;

    config.title = 'Contact Manager';

    // because these routes are loaded into the slot of layout
    // we should address them from as relative path from the src folder
    config.map([
      { route: '', name: 'contacts', moduleId: 'contacts/routes/components/main', nav: true, title: 'Contacts' },
      {
        route: 'new', name: 'new_contact', moduleId: 'contacts/routes/components/new', nav: true, title: 'Add New Contact',
        activationStrategy: activationStrategy.invokeLifecycle
      },
      { route: ':id', name: 'contactDetails', moduleId: 'contacts/routes/components/details', nav: false, title: '' },
      { route: ':id/edit', name: 'contactEdit', moduleId: 'contacts/routes/components/new', nav: false, title: '' }
    ]);
  }
}
