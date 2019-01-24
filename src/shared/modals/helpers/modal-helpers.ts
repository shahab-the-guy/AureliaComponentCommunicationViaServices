import { DialogService } from "aurelia-dialog";
import { autoinject } from "aurelia-framework";
import { IConfirmModel } from "shared/models/confirm-model";
import { ConfirmModal } from "../confirm-modal";


@autoinject()
export class ModalHelpers {

  constructor(private dialogService: DialogService) { }

  confirm(model: IConfirmModel) {
    return this.dialogService.open({
      viewModel: ConfirmModal,
      model: model
    });
  }

}
