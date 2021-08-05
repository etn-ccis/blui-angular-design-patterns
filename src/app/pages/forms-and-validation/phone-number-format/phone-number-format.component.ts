import { Component, OnInit, ViewChild, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StateService } from '../../../services/state.service';

@Component({
    selector: 'app-phone-number-format',
    templateUrl: './phone-number-format.component.html',
    styleUrls: ['./phone-number-format.component.scss'],
})
export class PhoneNumberFormatComponent implements OnInit {
    isSmall: boolean;
    countryFormControl: FormControl;
    phoneNumberFormControl: FormControl;
    countries: any[] = [
        { value: 'US', viewValue: '+1 (US)', placeholder: '### ### ####' },
        { value: 'CAN', viewValue: '+1 (CAN)', placeholder: '### ### ### ####' },
        { value: 'KZ', viewValue: '+7 (KZ)', placeholder: '### ### ### ####' },
        { value: 'FRA', viewValue: '+33 (FRA)', placeholder: '### ### ### ####' },
    ];
    countryPlaceholder = '### ### ####';
    constructor(
        private readonly _drawerService: StateService,
        private readonly _breakpointObserver: BreakpointObserver
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
        this.countryFormControl = new FormControl('US', Validators.required);
        this.phoneNumberFormControl = new FormControl('', Validators.required);
    }

    onCountryChange(): void {
        const selectedCountryDetails = this.countries.filter((item) => {
            return item.value === this.countryFormControl.value;
        });
        this.countryPlaceholder = selectedCountryDetails[0].placeholder;
    }

    //this accepts only number in phone number input field
    numberOnly(event: KeyboardEvent): boolean {
        const charCode = event.which ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 40 || charCode > 57)) {
            return false;
        }
        return true;
    }

    toggleMenu(): void {
        const drawerOpen = this._drawerService.getDrawerOpen();
        this._drawerService.setDrawerOpen(!drawerOpen);
    }
}
