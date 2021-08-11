import { Component, OnInit, ViewChild, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { FormControl, FormGroupDirective, NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { StateService } from '../../../services/state.service';
class CrossFieldErrorMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        return control.dirty && form.invalid;
    }
}
@Component({
    selector: 'app-verify-on-submit',
    templateUrl: './verify-on-submit.component.html',
    styleUrls: ['./verify-on-submit.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerifyOnSubmitComponent implements OnInit {
    isSmall: boolean;
    isLeftPaneVisible = true;
    searchDeviceForm: FormGroup;
    formSubmit = false;
    errorMatcher = new CrossFieldErrorMatcher();
    @ViewChild('serialNumberInput') serialNumberInput: ElementRef;

    constructor(
        private readonly _drawerService: StateService,
        private readonly _breakpointObserver: BreakpointObserver,
        private readonly _formBuilder: FormBuilder,
        private readonly _changeDetectorRef: ChangeDetectorRef
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
        this.serialNumberInput.nativeElement.focus();
        this._changeDetectorRef.detectChanges();
    }

    initForm(): void {
        this.searchDeviceForm = this._formBuilder.group({
            serialNumber: ['', [Validators.required]],
        });
    }

    searchDevice(): void {
        this.formSubmit = true;
        setTimeout(() => {
            this.formSubmit = false;
            const serialNumber = this.searchDeviceForm.controls['serialNumber'].value;
            if (serialNumber === '123') {
                this.isLeftPaneVisible = false;
                this._changeDetectorRef.detectChanges();
            } else {
                this.searchDeviceForm.controls['serialNumber'].setErrors({ deviceNotFound: true });
                this._changeDetectorRef.detectChanges();
                this.serialNumberInput.nativeElement.focus();
            }
        }, 3000);
    }

    addAnotherDevice(): void {
        this.isLeftPaneVisible = true;
        this.searchDeviceForm.reset();
        this.serialNumberInput.nativeElement.focus();
        this._changeDetectorRef.detectChanges();
    }

    toggleMenu(): void {
        const drawerOpen = this._drawerService.getDrawerOpen();
        this._drawerService.setDrawerOpen(!drawerOpen);
    }
}
