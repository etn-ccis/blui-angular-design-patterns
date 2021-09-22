import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

import { SpacerModule, UserMenuModule, InfoListItemModule } from '@pxblue/angular-components';

import { InAnAppBarComponent } from './in-an-app-bar.component';
import { ChipComponent } from './chip/chip.component';

@NgModule({
    declarations: [InAnAppBarComponent, ChipComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        MatChipsModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatToolbarModule,
        InfoListItemModule,
        SpacerModule,
        UserMenuModule,
    ],
})
export class InAnAppBarModule {}
