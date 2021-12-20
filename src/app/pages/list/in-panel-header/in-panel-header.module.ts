import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './shared/filter.pipe';
import { InPanelHeaderComponent } from './in-panel-header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { InfoListItemModule, SpacerModule } from '@brightlayer-ui/angular-components';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
    imports: [
        CommonModule,
        InfoListItemModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatSelectModule,
        MatToolbarModule,
        SpacerModule,
    ],
    declarations: [InPanelHeaderComponent, FilterPipe],
})
export class InPanelHeaderModule {}
