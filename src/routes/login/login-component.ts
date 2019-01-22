import { Router } from "aurelia-router";
import { autoinject } from "aurelia-framework";

@autoinject()
export class LoginComponent {

  constructor(private router: Router) {

  }

  onLogin() {
    this.router.navigateToRoute("contacts");
    return true;
  }

}
