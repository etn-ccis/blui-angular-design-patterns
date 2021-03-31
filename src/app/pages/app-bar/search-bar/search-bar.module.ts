import { NgModule } from '@angular/core';
import { EmptyStateModule, InfoListItemModule, SpacerModule } from '@pxblue/angular-components';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SearchBarComponent } from './search-bar.component';
import { FilterPipe } from './shared/filter.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        InfoListItemModule,
        MatToolbarModule,
        SpacerModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        FormsModule,
        EmptyStateModule,
    ],
    declarations: [SearchBarComponent, FilterPipe],
})
export class SearchBarModule {}
