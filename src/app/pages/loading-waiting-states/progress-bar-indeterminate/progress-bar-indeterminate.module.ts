import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarIndeterminateComponent } from './progress-bar-indeterminate.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SpacerModule, EmptyStateModule } from '@brightlayer-ui/angular-components';

@NgModule({
    declarations: [ProgressBarIndeterminateComponent],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatProgressBarModule,
        SpacerModule,
        MatSlideToggleModule,
        EmptyStateModule,
    ],
})
export class ProgressBarIndeterminateModule {}
