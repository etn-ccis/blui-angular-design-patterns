import { NgModule } from '@angular/core';
import { AppBarModule, SpacerModule, ThreeLinerModule } from '@brightlayer-ui/angular-components';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CollapsibleAppBarComponent } from './collapsible-app-bar.component';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
    imports: [
        CommonModule,
        AppBarModule,
        ThreeLinerModule,
        SpacerModule,
        MatIconModule,
        MatButtonModule,
        MatBadgeModule,
    ],
    declarations: [CollapsibleAppBarComponent],
    exports: [CollapsibleAppBarComponent],
})
export class CollapsibleAppBarModule {}
