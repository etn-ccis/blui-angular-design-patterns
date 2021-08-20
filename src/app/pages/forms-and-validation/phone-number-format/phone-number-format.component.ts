import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { StateService } from '../../../services/state.service';

type CountryDetails = {
    code: string;
    name: string;
    placeholder: string;
    maxLength: string;
    errorCode: string;
};
@Component({
    selector: 'app-phone-number-format',
    templateUrl: './phone-number-format.component.html',
    styleUrls: ['./phone-number-format.component.scss'],
})
export class PhoneNumberFormatComponent implements OnInit {
    isSmall: boolean;
    validatePhoneNumberForm: FormGroup;
    countries: CountryDetails[] = [
        { code: 'US', name: '+1 (US)', placeholder: '### ### ####', maxLength: '12', errorCode: 'U.S.' },
        { code: 'CA', name: '+1 (CA)', placeholder: '### ### ####', maxLength: '12', errorCode: 'Candian' },
        { code: 'RU', name: '+7 (RU)', placeholder: '### ### ## ##', maxLength: '13', errorCode: 'Russian' },
        { code: 'EG', name: '+20 (EG)', placeholder: '# #######', maxLength: '9', errorCode: 'Egyptian' },
        { code: 'IN', name: '+91 (IN)', placeholder: '#### ### ###', maxLength: '12', errorCode: 'Indian' },
    ];
    selectedCountry = this.countries[0];
    countryChange = false;

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
        this.validatePhoneNumberForm = this._formBuilder.group({
            phone: ['', [Validators.required, this.checkPhoneNumber.bind(this)]],
            selectedCountry: ['US', Validators.required],
        });
    }

    checkPhoneNumberPattern(phoneNumber: string, countryCode: string): boolean {
        switch (countryCode) {
            case 'RU': {
                return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{2})[-. ]?([0-9]{2})$/.test(phoneNumber);
            }
            case 'EG': {
                return /^\(?([0-9]{1})\)?[-. ]?([0-9]{7})$/.test(phoneNumber);
            }
            case 'IN': {
                return /^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/.test(phoneNumber);
            }
            default: {
                return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phoneNumber);
            }
        }
    }

    checkPhoneNumber(phoneNumberInput: AbstractControl): any {
        const isValid = this.checkPhoneNumberPattern(phoneNumberInput.value, this.selectedCountry.code);
        return isValid ? null : { invalidPhoneNumberFormat: true };
    }

    validatePhoneNumber(): void {
        if (this.validatePhoneNumberForm.invalid) {
            this.validatePhoneNumberForm.controls['phone'].setErrors({ invalidPhoneNumberFormat: true });
        }
    }

    removeError(): void {
        this.validatePhoneNumberForm.controls.phone.markAsUntouched();
    }

    allowNumbersOnly(event: KeyboardEvent): void {
        const allowedRegex = /[0-9]/g;
        if (!event.key.match(allowedRegex)) {
            event.preventDefault();
        }
        this.countryChange = false;
    }

    onCountryChange(countryDetails: any): void {
        this.countryChange = true;
        this.selectedCountry = this.countries.filter((item) => item.code === countryDetails.value)[0];
        const isValidPhoneNumber = this.checkPhoneNumberPattern(
            this.validatePhoneNumberForm.controls['phone'].value,
            this.selectedCountry.code
        );
        if (isValidPhoneNumber) {
            this.validatePhoneNumberForm.controls['phone'].setErrors(null);
        } else {
            this.validatePhoneNumberForm.controls['phone'].setErrors({ invalidPhoneNumberFormat: true });
        }
    }

    toggleMenu(): void {
        const drawerOpen = this._drawerService.getDrawerOpen();
        this._drawerService.setDrawerOpen(!drawerOpen);
    }
}
