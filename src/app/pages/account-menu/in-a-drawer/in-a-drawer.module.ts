import { NgModule } from '@angular/core';
import {
    DrawerLayoutModule,
    DrawerModule,
    EmptyStateModule,
    InfoListItemModule,
    SpacerModule,
} from '@pxblue/angular-components';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MenuInADrawerComponent } from './menu-in-a-drawer.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        InfoListItemModule,
        MatToolbarModule,
        SpacerModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        FormsModule,
        EmptyStateModule,
        DrawerLayoutModule,
        DrawerModule,
        MatSidenavModule,
        MatButtonModule,
    ],
    declarations: [MenuInADrawerComponent],
    exports: [MenuInADrawerComponent],
})
export class MenuInDrawerModule {}
