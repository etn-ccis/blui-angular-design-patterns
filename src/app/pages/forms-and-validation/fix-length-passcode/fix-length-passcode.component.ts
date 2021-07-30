import {
    Component,
    OnInit,
    AfterViewInit,
    ViewChild,
    ElementRef,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
} from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomvalidationService } from './services/customvalidation.service';
import { StateService } from '../../../services/state.service';

import * as Colors from '@pxblue/colors';

class CrossFieldErrorMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        return control.dirty && form.invalid;
    }
}
@Component({
    selector: 'app-fix-length-passcode',
    templateUrl: './fix-length-passcode.component.html',
    styleUrls: ['./fix-length-passcode.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FixLengthPasscodeComponent implements OnInit, AfterViewInit {
    isSmall: boolean;
    passcodeForm: FormGroup;
    showLoading = false;
    showDoneIcon = false;
    successColor = Colors.green[500];
    errorMatcher = new CrossFieldErrorMatcher();
    @ViewChild('passcodeInput') passcodeInput: ElementRef;

    constructor(
        private readonly _drawerService: StateService,
        private readonly _breakpointObserver: BreakpointObserver,
        private readonly _formBuilder: FormBuilder,
        private readonly _changeDetectorRef: ChangeDetectorRef,
        private readonly _customValidator: CustomvalidationService
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

    ngAfterViewInit(): void {
        this.passcodeInput.nativeElement.focus();
        this._changeDetectorRef.detectChanges();
    }

    initForm(): void {
        this.passcodeForm = this._formBuilder.group(
            {
                passcode: [
                    { value: '', disabled: false },
                    [Validators.required],
                    this._customValidator.passcodeValidator.bind(this._customValidator),
                ],
            },
            { updateOn: 'blur' }
        );
    }

    checkPasscode(value: string): void {
        if (value.length === 6) {
            this.passcodeForm.controls.passcode.disable();
            this.showLoading = true;
            this.passcodeForm.controls['passcode'].clearValidators();
            this.passcodeForm.controls['passcode'].updateValueAndValidity();
            this.passcodeForm.controls['passcode'].setValidators([
                Validators.required,
                this._customValidator.validatePasscode.bind(this._customValidator),
            ]);
            this.passcodeForm.controls['passcode'].updateValueAndValidity();
            setTimeout(() => {
                this.passcodeForm.controls.passcode.enable();
                this.passcodeForm.controls['passcode'].setErrors({'invalidPasscode': true});
                this.showLoading = false;
                this.showDoneIcon = false;
                this._changeDetectorRef.detectChanges();
            }, 3000);
        }
    }

    get passcodeFormControl(): any {
        return this.passcodeForm.controls;
    }

    toggleMenu(): void {
        const drawerOpen = this._drawerService.getDrawerOpen();
        this._drawerService.setDrawerOpen(!drawerOpen);
    }

    matcher(event: KeyboardEvent): void {
        const allowedRegex = /[0-9]/g;
        if (!event.key.match(allowedRegex)) {
            event.preventDefault();
        }
    }

    resetForm(): void {
        this.passcodeForm.controls.passcode.enable();
        this.passcodeForm.reset();
        this.initForm();
        this.showLoading = false;
        this.showDoneIcon = false;
        this.passcodeInput.nativeElement.focus();
        this._changeDetectorRef.detectChanges();
    }
}
