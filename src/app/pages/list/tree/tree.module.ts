import { NgModule } from '@angular/core';
import { TreeListComponent } from './tree.component';
import { InfoListItemModule, SpacerModule } from '@pxblue/angular-components';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { TreeItemComponent } from './tree-item.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        InfoListItemModule,
        MatButtonModule,
        MatDividerModule,
        MatExpansionModule,
        MatIconModule,
        MatToolbarModule,
        MatRadioModule,
        SpacerModule,
    ],
    declarations: [TreeListComponent, TreeItemComponent],
})
export class TreeListModule {}
