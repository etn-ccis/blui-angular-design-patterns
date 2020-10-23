import { Component } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';
import { MultiselectListService } from './multiselect-list.service';

@Component({
    selector: 'app-multi-select-snackbar',
    template: `
        <div style="display: flex; line-height: 40px">
            {{ getMessage() }}
            <pxb-spacer></pxb-spacer>
            <button
                data-cy="snackbar-delete"
                matTooltip="Delete selected"
                mat-icon-button
                data-cy="snackbar-delete"
                (click)="snackBarRef.dismiss(); selectService.deleteSelected()"
            >
                <mat-icon>delete</mat-icon>
            </button>
            <button
                data-cy="snackbar-cancel"
                matTooltip="Cancel"
                mat-icon-button
                data-cy="snackbar-cancel"
                (click)="snackBarRef.dismiss(); selectService.unselectAll()"
            >
                <mat-icon>cancel</mat-icon>
            </button>
        </div>
    `,
})
export class MultiselectSnackbarComponent {
    constructor(
        public snackBarRef: MatSnackBarRef<MultiselectSnackbarComponent>,
        public selectService: MultiselectListService
    ) {}

    getMessage(): string {
        return `${this.selectService.getSelectedItems().length} items selected`;
    }
}
