import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogService } from '../services/dialog-service';
@Component({
    selector: 'prompt-dialog',
    templateUrl: 'prompt-dialog.html',
})
export class PromptDialog {
    constructor(
        public dialogRef: MatDialogRef<PromptDialog>,
        private readonly _dialogService: DialogService,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private readonly _breakpointObserver: BreakpointObserver
    ) {}

    isSmall: boolean;

    ngOnInit(): void {
        this._breakpointObserver
            .observe([Breakpoints.Small, Breakpoints.Handset])
            .subscribe((state: BreakpointState) => {
                if (state.matches) {
                    this.isSmall = true;
                } else {
                    this.isSmall = false;
                }
            });
            
        const leftPosition = window.innerWidth / 2 - 140 + 146;
        const topPosition = window.innerHeight / 2 - 64;
        if (!this.isSmall) this.dialogRef.updatePosition({ top: `${topPosition}px`, left: `${leftPosition}px` });
    }

    onCancelClick(): void {
        this.dialogRef.close();
    }

    deleteAll(): void {
        this._dialogService.deleteData.next(true);
        this.dialogRef.close();
    }
}
