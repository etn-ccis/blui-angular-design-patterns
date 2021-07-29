import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomvalidationService } from './services/customvalidation.service';
import { StateService } from '../../../services/state.service';

// class CrossFieldErrorMatcher implements ErrorStateMatcher {
//     isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//         return control.dirty && form.invalid;
//     }
// }

@Component({
    selector: 'app-fix-length-passcode',
    templateUrl: './fix-length-passcode.component.html',
    styleUrls: ['./fix-length-passcode.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FixLengthPasscodeComponent implements OnInit, AfterViewInit {
    isSmall: boolean;
    passcodeForm: FormGroup;
    disableInput = true;
    showLoadingIcon = false;
    showDoneIcon = false;
    @ViewChild('passcodeInput') passcodeInput: ElementRef;

    constructor(
        private readonly _drawerService: StateService,
        private readonly _breakpointObserver: BreakpointObserver,
        private readonly _formBuilder: FormBuilder,
        private _changeDetectorRef: ChangeDetectorRef,
        private customValidator: CustomvalidationService,
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
        this.passcodeForm = this._formBuilder.group({
            passcode: ['', [Validators.required], this.customValidator.passcodeValidator.bind(this.customValidator)],
        });
    }

    checkPasscode(value) {
        if(value.lenth === 6) {
            this.disableInput = true;
        }
    }

    get passcodeFormControl() {  
        return this.passcodeForm.controls;  
    }

    toggleMenu(): void {
        const drawerOpen = this._drawerService.getDrawerOpen();
        this._drawerService.setDrawerOpen(!drawerOpen);
    }

    matcher(event) {
        const allowedRegex = /[0-9]/g;
        if (!event.key.match(allowedRegex)) {
            event.preventDefault();
        }
    }
}
