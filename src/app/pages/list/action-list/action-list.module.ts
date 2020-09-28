import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { ActionListComponent } from './action-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { InfoListItemModule, EmptyStateModule, SpacerModule } from '@pxblue/angular-components';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        InfoListItemModule,
        EmptyStateModule,
        SpacerModule,
        MatTooltipModule,
    ],
    declarations: [ActionListComponent],
})
export class ActionListModule {}
