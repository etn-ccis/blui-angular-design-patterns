import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonLoaderComponent } from './skeleton-loader.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SpacerModule } from '@pxblue/angular-components';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { ContentLoaderModule } from '@netbasal/ngx-content-loader';

@NgModule({
  declarations: [SkeletonLoaderComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    SpacerModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    ContentLoaderModule,
    MatCardModule,
  ]
})
export class SkeletonLoaderModule { }
