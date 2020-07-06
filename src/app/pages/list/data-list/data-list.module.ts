import { NgModule } from '@angular/core';
import { DataListComponent } from './data-list.component';
import { InfoListItemModule } from '@pxblue/angular-components';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule, InfoListItemModule, MatToolbarModule],
    declarations: [DataListComponent],
})
export class DataListModule {}
