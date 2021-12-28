import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { InlineActionsComponent } from './inline-actions.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { InfoListItemModule, ListItemTagModule } from '@brightlayer-ui/angular-components';
import { MatTooltipModule } from '@angular/material/tooltip';
@NgModule({
    imports: [
        CommonModule,
        InfoListItemModule,
        ListItemTagModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatToolbarModule,
        MatTooltipModule,
    ],
    declarations: [InlineActionsComponent],
})
export class InlineActionsModule {}
