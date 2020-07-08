import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { SortableListComponent } from './sortable-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { SpacerModule, InfoListItemModule } from '@pxblue/angular-components';

@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        DragDropModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatExpansionModule,
        MatIconModule,
        MatListModule,
        MatSelectModule,
        SpacerModule,
        InfoListItemModule,
    ],
    declarations: [SortableListComponent],
})
export class SortableListModule {}
