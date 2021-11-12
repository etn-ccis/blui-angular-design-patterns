import { NgModule } from '@angular/core';
import { InfoListItemModule, SpacerModule } from '@brightlayer-ui/angular-components';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ResponsiveTableComponent } from './responsive-table.component';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [
        CommonModule,
        InfoListItemModule,
        MatToolbarModule,
        SpacerModule,
        MatIconModule,
        MatButtonModule,
        MatTableModule,
        FlexLayoutModule,
    ],
    declarations: [ResponsiveTableComponent],
})
export class ResponsiveTableModule {}
