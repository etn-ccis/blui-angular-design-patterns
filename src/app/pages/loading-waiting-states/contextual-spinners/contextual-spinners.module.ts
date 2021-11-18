import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContextualSpinnersComponent } from './contextual-spinners.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpacerModule } from '@brightlayer-ui/angular-components';

@NgModule({
    declarations: [ContextualSpinnersComponent],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatSlideToggleModule,
        MatProgressSpinnerModule,
        SpacerModule,
    ],
})
export class ContextualSpinnersModule {}
