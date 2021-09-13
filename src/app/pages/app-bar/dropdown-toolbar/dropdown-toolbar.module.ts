import { NgModule } from '@angular/core';
import { DropdownToolbarModule as PxbDropdownToolbarModule } from '@pxblue/angular-components';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DropdownToolbarComponent } from './dropdown-toolbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { DropdownToolbarBottomSheetExample } from './dropdown-toolbar-bottomsheet.component';

@NgModule({
    imports: [
        CommonModule,
        PxbDropdownToolbarModule,
        MatIconModule,
        MatButtonModule,
        FlexLayoutModule,
        MatMenuModule,
        MatListModule,
    ],
    declarations: [DropdownToolbarComponent, DropdownToolbarBottomSheetExample],
    exports: [DropdownToolbarComponent, DropdownToolbarBottomSheetExample],
})
export class DropdownToolbarModule {}
