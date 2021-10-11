import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { StatusListComponent } from './status-list.component';
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
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatButtonModule,
        ListItemTagModule,
        MatExpansionModule,
    ],
    declarations: [StatusListComponent],
})
export class StatusListModule {}
