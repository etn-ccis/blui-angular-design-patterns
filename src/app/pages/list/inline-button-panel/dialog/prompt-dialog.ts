import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogService } from '../services/dialog-service';
@Component({
    selector: 'prompt-dialog',
    templateUrl: 'prompt-dialog.html',
})
export class PromptDialog {
    constructor(public dialogRef: MatDialogRef<PromptDialog>, private readonly _dialogService: DialogService) {}

    onCancelClick(): void {
        this.dialogRef.close();
    }

    deleteAll(): void {
        this._dialogService.deleteData.next(true);
        this.dialogRef.close();
    }
}
