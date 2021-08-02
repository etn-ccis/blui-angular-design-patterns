import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { FormControl, FormGroupDirective, NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { StateService } from '../../../services/state.service';

type PasswordRequirement = {
    description: string;
    regex: RegExp;
    success?: boolean;
    icon?: string;
};
class CrossFieldErrorMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        return control.dirty && form.invalid;
    }
}
@Component({
    selector: 'app-password',
    templateUrl: './password.component.html',
    styleUrls: ['./password.component.scss'],
})
export class PasswordComponent implements OnInit {
    isSmall: boolean;
    userPassword: FormGroup;
    passwordFormGroup: FormGroup;
    oldPasswordVisible = false;
    newPasswordVisible = false;
    confirmPasswordVisible = false;
    errorMatcher = new CrossFieldErrorMatcher();
    passesStrengthCheck = false;
    passwordRequirements: PasswordRequirement[] = [];
    defaultPasswordRequirements = {
        characterLimit: true,
        uppercaseLetter: true,
        lowercaseLetter: true,
        requireNumber: true,
        specialCharacter: true,
    };

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
        this.passwordRequirements = this.getPasswordRequirements();
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
    }

    checkPasswords(group: FormGroup): any {
        const pass = group.get('newPassword').value;
        const confirmPass = group.get('confirmPassword').value;
        return pass === confirmPass ? null : { passwordsDoNotMatch: true };
    }

    getPasswordRequirements(): PasswordRequirement[] {
        const req: PasswordRequirement[] = [];
        if (this.defaultPasswordRequirements.characterLimit) {
            req.push({
                description: 'At least 8 characters in length',
                regex: /^.{8,16}$/,
            });
        }
        if (this.defaultPasswordRequirements.requireNumber) {
            req.push({
                description: 'At least 1 digit',
                regex: /[0-9]/,
            });
        }
        if (this.defaultPasswordRequirements.uppercaseLetter) {
            req.push({
                description: 'At least 1 uppercase letter',
                regex: /[A-Z]/,
            });
        }
        if (this.defaultPasswordRequirements.lowercaseLetter) {
            req.push({
                description: 'At least 1 lowercase letter',
                regex: /[a-z]/,
            });
        }
        if (this.defaultPasswordRequirements.specialCharacter) {
            req.push({
                description: 'At least 1 special character (Valid: ! @ # $ ^ &)',
                regex: /[!"#$%&'()*+,-./:;<=>?@[\]^`{|}~]+/,
            });
        }
        return req;
    }

    hasValidPasswords(): boolean {
        return this.userPassword.valid && this.passwordFormGroup.valid && this.passesStrengthCheck;
    }

    clearFields(): void {
        this.userPassword.reset();
        this.passwordFormGroup.reset();
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
