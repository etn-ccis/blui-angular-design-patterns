import { Component, ViewEncapsulation, NgModule } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { InfoListItemModule } from '@pxblue/angular-components';

@Component({
    selector: 'bottom-sheet',
    templateUrl: './bottom-sheet.html',
    styleUrls: ['./bottom-sheet.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class BottomSheet {
    constructor(private readonly _bottomSheetRef: MatBottomSheetRef<BottomSheet>) {}

    // this is the placeholder for actual functionality
    openLink(event: MouseEvent): void {
        this._bottomSheetRef.dismiss();
        event.preventDefault();
    }
}

@NgModule({
    imports: [CommonModule, MatIconModule, MatListModule, InfoListItemModule],
    declarations: [],
    providers: [],
})
export class BasicBottomSheetModule {}
