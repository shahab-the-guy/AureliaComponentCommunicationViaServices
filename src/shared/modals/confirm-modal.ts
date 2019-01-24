import { IConfirmModel } from "shared/models/confirm-model";
import { autoinject } from "aurelia-framework";
import { DialogController } from 'aurelia-dialog';


@autoinject()
export class ConfirmModal {

  private model: IConfirmModel;

  constructor(private dialogController: DialogController) { }

  activate(model: IConfirmModel) {
    this.model = Object.assign(this.model || {}, model);
  }

}
