import { NgModule } from '@angular/core';
import { DataListComponent } from './data-list.component';
import { InfoListItemModule, SpacerModule } from '@pxblue/angular-components';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [CommonModule, InfoListItemModule, MatToolbarModule, SpacerModule, MatIconModule, MatButtonModule],
    declarations: [DataListComponent],
})
export class DataListModule {}
