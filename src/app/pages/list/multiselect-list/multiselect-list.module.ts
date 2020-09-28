import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MultiselectListComponent } from './multiselect-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { SpacerModule, InfoListItemModule, EmptyStateModule } from '@pxblue/angular-components';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatListModule,
        MatSelectModule,
        SpacerModule,
        InfoListItemModule,
        EmptyStateModule,
        FlexLayoutModule,
        MatTooltipModule,
    ],
    declarations: [MultiselectListComponent],
})
export class MultiselectListModule {}
