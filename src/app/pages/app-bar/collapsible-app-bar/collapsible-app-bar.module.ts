import { NgModule } from '@angular/core';
import { InfoListItemModule, SpacerModule } from '@pxblue/angular-components';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CollapsibleAppBarComponent } from './collapsible-app-bar.component';

@NgModule({
    imports: [
        CommonModule,
        InfoListItemModule,
        MatToolbarModule,
        SpacerModule,
        MatIconModule,
        MatButtonModule
    ],
    declarations: [CollapsibleAppBarComponent],
})
export class CollapsibleAppBarModule {}
