import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogService } from './services/dialog-service';
@Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {
    constructor(
        public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
        private readonly _dialogService: DialogService
    ) {}

    onCancelClick(): void {
        this.dialogRef.close();
    }

    deleteAll(): void {
        this._dialogService.deleteData.next(true);
        this.dialogRef.close();
    }
}
