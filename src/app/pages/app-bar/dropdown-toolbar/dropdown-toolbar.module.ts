import { NgModule } from '@angular/core';
import { DropdownToolbarModule as BluiDropdownToolbarModule } from '@brightlayer-ui/angular-components';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DropdownToolbarComponent } from './dropdown-toolbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { DropdownToolbarBottomSheetExample } from './dropdown-toolbar-bottomsheet.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

@NgModule({
    imports: [
        CommonModule,
        BluiDropdownToolbarModule,
        MatIconModule,
        MatButtonModule,
        FlexLayoutModule,
        MatMenuModule,
        MatListModule,
        MatBottomSheetModule,
    ],
    declarations: [DropdownToolbarComponent, DropdownToolbarBottomSheetExample],
    exports: [DropdownToolbarComponent, DropdownToolbarBottomSheetExample],
})
export class DropdownToolbarModule {}
