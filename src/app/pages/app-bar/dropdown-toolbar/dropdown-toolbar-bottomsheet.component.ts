import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { DropdownToolbarStateService } from './dropdown-toolbar.service';
import { menuItems } from './dropdown-toolbar.component';

@Component({
    selector: 'app-dropdown-toolbar-bottomsheet',
    template: `
        <mat-nav-list style="padding-top: 0">
            <a
                mat-list-item
                *ngFor="let item of items"
                class="mat-body-1"
                style="height: 48px; line-height: 48px; cursor: pointer"
                (click)="setSelected(item)"
                >{{ item }}</a
            >
        </mat-nav-list>
    `,
})
export class DropdownToolbarBottomSheetExample {
    items = menuItems;
    constructor(
        private readonly _bottomSheetRef: MatBottomSheetRef<DropdownToolbarBottomSheetExample>,
        private readonly _stateService: DropdownToolbarStateService
    ) {}

    setSelected(item: string): void {
        this._stateService.setSelected(item);
        this._bottomSheetRef.dismiss();
    }
}
