import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { StatusListComponent } from './status-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { InfoListItemModule } from '@pxblue/angular-components';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [CommonModule, InfoListItemModule, MatToolbarModule, MatIconModule, MatListModule, MatButtonModule],
    declarations: [StatusListComponent],
})
export class StatusListModule {}
