import {Component, OnInit, OnDestroy} from '@angular/core';
import {ModalComponent, DialogRef} from "angular2-modal";
import {Subscription} from "rxjs";
import {ConfirmData} from "../classes/modal-data";
import {BSModalContext} from "angular2-modal/plugins/bootstrap";

@Component({
  selector: 'app-custom-modal',
  templateUrl: 'custom-modal.component.html',
  styleUrls: ['custom-modal.component.css']
})


export class CustomModalComponent implements ModalComponent<ConfirmDialogData>, OnDestroy {

    private subscriptions: Subscription[] = [];
    private context: ConfirmDialogData;
    private confirmData: ConfirmData;

    constructor(public dialog: DialogRef<ConfirmDialogData>) {
        this.context = dialog.context;
        this.confirmData = this.context.confirmData;
    }


    ngOnDestroy() {
        _.each(this.subscriptions, subscription => {
            subscription.unsubscribe();
        });
    }

    yes() {
        this.dialog.close(true);
    }

    cancel() {
        this.dialog.close(false);
    }

}
export class ConfirmDialogData extends BSModalContext {
    public confirmData: ConfirmData;

    constructor(message?: string, btnYes?: string, btnCancel?: string) {
        super();
        this.size = 'sm';
        this.confirmData = new ConfirmData();

        if (message) {
            this.confirmData.message = message;
        }
        if (btnYes) {
            this.confirmData.btnYes = btnYes;
        }
        if (btnCancel) {
            this.confirmData.btnCancel = btnCancel;
        }
    }
}

// http://plnkr.co/edit/ZAZqZu?p=preview
// https://github.com/budacode/angularslice/blob/3d6365f12c17e19cb35e3c662b6d034ed4c810d7/src/app/dialogs/confirm-dialog/confirm-dialog.component.ts
