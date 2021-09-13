import { NgModule } from '@angular/core';
import { AppBarModule, InfoListItemModule, SpacerModule, ThreeLinerModule } from '@pxblue/angular-components';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CollapsibleAppBarComponent } from './collapsible-app-bar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
    imports: [
        CommonModule,
        InfoListItemModule,
        MatToolbarModule,
        AppBarModule,
        ThreeLinerModule,
        SpacerModule,
        MatIconModule,
        MatButtonModule,
        FlexLayoutModule,
        MatBadgeModule,
    ],
    declarations: [CollapsibleAppBarComponent],
})
export class CollapsibleAppBarModule {}
