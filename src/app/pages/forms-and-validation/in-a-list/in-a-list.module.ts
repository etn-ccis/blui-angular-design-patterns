import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfoListItemModule } from '@pxblue/angular-components';

import {InAListComponent} from './in-a-list.component'

@NgModule({
  declarations: [InAListComponent],
  imports: [
    BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      CommonModule,
      MatToolbarModule,
      MatIconModule,
      MatButtonModule,
      MatInputModule,
      MatFormFieldModule,
      MatDividerModule,
      MatSelectModule,
      MatTooltipModule,
      MatCheckboxModule,
      MatCardModule,
      MatSlideToggleModule,
      InfoListItemModule,
  ]
})
export class InAListModule { }
