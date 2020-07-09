import { Component, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

type Data = {
    selectedItems: [];
};

@Component({
    selector: 'bottom-sheet',
    templateUrl: 'bottom-sheet.component.html',
})
export class BottomSheetComponent {
    constructor(
        private readonly _bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>,
        @Inject(MAT_BOTTOM_SHEET_DATA) public data: Data
    ) {}

    deleteItems(): void {
        this._bottomSheetRef.dismiss('deleteItems');
    }

    cancelItems(): void {
        this._bottomSheetRef.dismiss('cancelItems');
    }
}
