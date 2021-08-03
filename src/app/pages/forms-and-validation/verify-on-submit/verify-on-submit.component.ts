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
import { StateService } from '../../../services/state.service';

@Component({
    selector: 'app-verify-on-submit',
    templateUrl: './verify-on-submit.component.html',
    styleUrls: ['./verify-on-submit.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerifyOnSubmitComponent implements OnInit {
    isSmall: boolean;
    findDeviceForm: FormGroup;
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
        this.findDeviceForm = this._formBuilder.group({
            serialNumber: [{ value: '', disabled: false }, [Validators.required]],
        });
    }

    findDevice(): void {
      this.formSubmit = true;
        setTimeout(() => {
            this.formSubmit = false;
            this.findDeviceForm.controls['serialNumber'].setErrors({ deviceNotFound: true });
            this.serialNumberInput.nativeElement.focus();
        }, 3000);
    }

    toggleMenu(): void {
        const drawerOpen = this._drawerService.getDrawerOpen();
        this._drawerService.setDrawerOpen(!drawerOpen);
    }
}
