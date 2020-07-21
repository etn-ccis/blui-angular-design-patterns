import { NgModule } from '@angular/core';
import { InfoListItemModule } from '@pxblue/angular-components';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormValidationComponent } from './form-validation.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { ValidationListItemComponent } from './validation-list-item.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        CommonModule,
        InfoListItemModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatCardModule,
    ],
    declarations: [FormValidationComponent, ValidationListItemComponent],
})
export class FormValidationModule {}
