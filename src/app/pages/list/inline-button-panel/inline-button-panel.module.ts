import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { InfoListItemModule, EmptyStateModule, SpacerModule } from '@brightlayer-ui/angular-components';
import { MatTooltipModule } from '@angular/material/tooltip';
import { InlineButtonPanelComponent } from './inline-button-panel.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [InlineButtonPanelComponent],
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
        MatCardModule,
    ],
})
export class InlineButtonPanelModule {}
