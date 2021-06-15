import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarsComponent } from './progress-bars.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { SpacerModule, InfoListItemModule } from '@pxblue/angular-components';

@NgModule({
  declarations: [ProgressBarsComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    SpacerModule,
    MatSlideToggleModule,
    MatCardModule,
    MatRadioModule,
    MatDividerModule,
    InfoListItemModule,
  ]
})
export class ProgressBarsModule { }
