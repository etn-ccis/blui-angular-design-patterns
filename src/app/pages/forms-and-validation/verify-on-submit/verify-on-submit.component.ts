import { Component, OnInit, ViewChild, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StateService } from '../../../services/state.service';

@Component({
    selector: 'app-verify-on-submit',
    templateUrl: './verify-on-submit.component.html',
    styleUrls: ['./verify-on-submit.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerifyOnSubmitComponent implements OnInit {
    isSmall: boolean;
    searchDeviceForm: FormGroup;
    formSubmit = false;

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
            serialNumber: [{ value: '' }, [Validators.required]],
        });
    }

    searchDevice(): void {
        this.formSubmit = true;
        setTimeout(() => {
            this.formSubmit = false;
            this._changeDetectorRef.detectChanges();
            this.searchDeviceForm.controls['serialNumber'].setErrors({ deviceNotFound: true });
            this.serialNumberInput.nativeElement.focus();
        }, 3000);
    }

    toggleMenu(): void {
        const drawerOpen = this._drawerService.getDrawerOpen();
        this._drawerService.setDrawerOpen(!drawerOpen);
    }
}
