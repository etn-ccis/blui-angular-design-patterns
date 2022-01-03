import { Component, Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

type DialogData = {
    deviceName: string;
};

@Component({
    selector: 'app-local-actions-dialog',
    templateUrl: './local-actions-dialog.component.html',
    styleUrls: ['./local-actions-dialog.component.scss'],
})
export class LocalActionsDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<LocalActionsDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {}

    closeDialog(): void {
        this.dialogRef.close(this.data.deviceName);
    }
}
