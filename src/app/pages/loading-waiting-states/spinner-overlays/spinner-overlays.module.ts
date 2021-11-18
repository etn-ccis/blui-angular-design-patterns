import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerOverlaysComponent } from './spinner-overlays.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { SpacerModule } from '@brightlayer-ui/angular-components';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [SpinnerOverlaysComponent],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatSlideToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatDividerModule,
        SpacerModule,
        FormsModule,
    ],
})
export class SpinnerOverlaysModule {}
