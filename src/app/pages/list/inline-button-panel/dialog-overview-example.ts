import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface DialogData {
    animal: string;
    name: string;
}

/**
 * @title Dialog Overview
 */
@Component({
    selector: 'dialog-overview-example',
    templateUrl: 'dialog-overview-example.html',
})
export class DialogOverviewExample {
    animal: string;
    name: string;

    constructor(public dialog: MatDialog) {}

    openDialog(): void {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '250px',
            data: { name: this.name, animal: this.animal },
        });

        dialogRef.afterClosed().subscribe((result) => {
            // eslint-disable-next-line no-console
            console.log('The dialog was closed');
            this.animal = result;
        });
    }
}

@Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {
    constructor(
        public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {}

    onCancelClick(): void {
        this.dialogRef.close();
    }
}

/**  Copyright 2021 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
