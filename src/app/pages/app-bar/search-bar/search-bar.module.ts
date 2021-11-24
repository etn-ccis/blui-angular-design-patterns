import { NgModule } from '@angular/core';
import { EmptyStateModule, InfoListItemModule, SpacerModule } from '@brightlayer-ui/angular-components';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from './search-bar.component';
import { FilterPipe } from './shared/filter.pipe';
import { BoldSearchPipe } from './shared/bold-search.pipe';

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
    declarations: [SearchBarComponent, FilterPipe, BoldSearchPipe],
    exports: [SearchBarComponent, FilterPipe, BoldSearchPipe],
})
export class SearchBarModule {}
