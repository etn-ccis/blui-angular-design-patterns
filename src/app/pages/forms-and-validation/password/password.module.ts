import { NgModule } from '@angular/core';
import { InfoListItemModule } from '@brightlayer-ui/angular-components';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { PasswordComponent } from './password.component';
import { BluiPasswordStrengthCheckerComponent } from './password-strength-checker/blui-password-strength-checker.component';
import { PasswordStrengthCheckComponent } from './password-strength-checker/password-strength-checker.component';

@NgModule({
    declarations: [PasswordComponent, BluiPasswordStrengthCheckerComponent, PasswordStrengthCheckComponent],
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
        MatDividerModule,
    ],
})
export class PasswordModule {}
