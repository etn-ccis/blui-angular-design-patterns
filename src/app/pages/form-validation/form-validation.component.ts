import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StateService } from '../../services/state.service';

class CrossFieldErrorMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        return control.dirty && form.invalid;
    }
}

@Component({
    selector: 'app-form-validation',
    templateUrl: './form-validation.component.html',
    styleUrls: ['./form-validation.component.scss'],
})
export class FormValidationComponent implements OnInit {
    isSmall: boolean;
    userPassword: FormGroup;
    passwordFormGroup: FormGroup;
    userForm: FormGroup;
    errorMatcher = new CrossFieldErrorMatcher();
    passLength = false;
    specialFlag = false;
    numberFlag = false;
    upperFlag = false;
    lowerFlag = false;
    oldPasswordVisible = false;
    newPasswordVisible = false;
    confirmPasswordVisible = false;

    //this accepts only number in phone number input field
    numberOnly(event: KeyboardEvent): boolean {
        const charCode = event.which ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 40 || charCode > 57)) {
            return false;
        }
        return true;
    }

    constructor(
        private readonly _drawerService: StateService,
        private readonly _breakpointObserver: BreakpointObserver,
        private readonly _formBuilder: FormBuilder
    ) {
        this.initForm();
    }

    ngOnInit(): void {
        this._breakpointObserver
            .observe([Breakpoints.Small, Breakpoints.Handset])
            .subscribe((state: BreakpointState) => {
                if (state.matches) {
                    this.isSmall = true;
                } else {
                    this.isSmall = false;
                }
            });
    }

    initForm(): void {
        this.userPassword = this._formBuilder.group({
            oldPassword: ['', Validators.required],
        });
        this.passwordFormGroup = this._formBuilder.group(
            {
                newPassword: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
                confirmPassword: ['', Validators.required],
            },
            {
                validator: this.checkPasswords,
            }
        );
        this.userForm = this._formBuilder.group({
            inputFC: ['', Validators.required],
            email: [
                '',
                Validators.compose([
                    Validators.required,
                    Validators.email,
                    Validators.pattern(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i),
                ]),
            ],
            phoneNumber: [
                '',
                Validators.compose([
                    Validators.required,
                    Validators.minLength(10),
                    Validators.pattern(/((\(\d{3}\)?)|(\d{3}))([\s-./]?)(\d{3})([\s-./]?)(\d{4})/),
                ]),
            ],
        });
    }

    checkPasswords(group: FormGroup): any {
        const pass = group.get('newPassword').value;
        const confirmPass = group.get('confirmPassword').value;
        return pass === confirmPass ? null : { passwordsDoNotMatch: true };
    }

    checkPasswordStrength(password: string): void {
        this.passLength = password.length > 7;
        this.specialFlag = /[!@#$^&]/.test(password);
        this.numberFlag = /[0-9]/.test(password);
        this.upperFlag = /[A-Z]/.test(password);
        this.lowerFlag = /[a-z]/.test(password);
    }

    toggleOldPasswordVisibility(): void {
        this.oldPasswordVisible = !this.oldPasswordVisible;
    }

    toggleNewPasswordVisibility(): void {
        this.newPasswordVisible = !this.newPasswordVisible;
    }

    toggleConfirmPasswordVisibility(): void {
        this.confirmPasswordVisible = !this.confirmPasswordVisible;
    }

    toggleMenu(): void {
        const drawerOpen = this._drawerService.getDrawerOpen();
        this._drawerService.setDrawerOpen(!drawerOpen);
    }
}
