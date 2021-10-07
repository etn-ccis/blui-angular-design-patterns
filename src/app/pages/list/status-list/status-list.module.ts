import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { StatusListComponent } from './status-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { InfoListItemModule, ListItemTagModule } from '@pxblue/angular-components';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
    imports: [
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
