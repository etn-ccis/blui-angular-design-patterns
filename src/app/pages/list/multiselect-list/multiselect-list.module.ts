import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { InfoListItemModule } from '@brightlayer-ui/angular-components';
import { MultiselectListComponent } from './multiselect-list.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatCheckboxModule,
        MatListModule,
        InfoListItemModule,
        MatCheckboxModule,
    ],
    declarations: [MultiselectListComponent],
})
export class MultiselectListModule {}
