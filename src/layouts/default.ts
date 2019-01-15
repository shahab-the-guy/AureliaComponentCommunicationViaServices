import { Router } from "aurelia-router";
import { autoinject } from "aurelia-framework";

@autoinject()
export class DefaultLayout {
  constructor(private router: Router) { }
}
