import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { StatusListComponent } from './status-list.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { InfoListItemModule, ListItemTagModule } from '@pxblue/angular-components';
@NgModule({
    imports: [
        BrowserAnimationsModule,
        CommonModule,
        InfoListItemModule,
        ListItemTagModule,
        MatBadgeModule,
        MatButtonModule,
        MatExpansionModule,
        MatListModule,
        MatIconModule,
        MatToolbarModule,
    ],
    declarations: [StatusListComponent],
})
export class StatusListModule {}
