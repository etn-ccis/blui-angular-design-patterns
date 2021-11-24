import { NgModule } from '@angular/core';
import { InfoListItemModule, SpacerModule } from '@brightlayer-ui/angular-components';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { PageWideSearchComponent } from './page-wide-search.component';
import { SearchBarModule } from '../search-bar/search-bar.module';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        InfoListItemModule,
        MatBadgeModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatToolbarModule,
        SearchBarModule,
        SpacerModule,
    ],
    declarations: [PageWideSearchComponent],
})
export class PageWideSearchModule {}
