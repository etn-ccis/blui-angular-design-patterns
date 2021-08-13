import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { StateService } from '../../../services/state.service';
import { parsePhoneNumberFromString, AsYouType } from 'libphonenumber-js';

@Component({
    selector: 'app-phone-number-format',
    templateUrl: './phone-number-format.component.html',
    styleUrls: ['./phone-number-format.component.scss'],
})
export class PhoneNumberFormatComponent implements OnInit {
    isSmall: boolean;
    selectedPhoneNumber: any;
    validatePhoneNumberForm: FormGroup;
    validPhoneNumber: number;
    countries: any[] = [
        { code: 'US', name: '+1 (US)', placeholder: '### ### ####' },
        { code: 'CA', name: '+1 (CA)', placeholder: '### ### ####' },
        { code: 'RU', name: '+7 (RU)', placeholder: '### ### ## ##' },
        { code: 'EG', name: '+20 (EG)', placeholder: '# #######' },
        { code: 'IN', name: '+91 (IN)', placeholder: '#### ### ###' },
    ];

    selectedCountry = this.countries[0].code;
    countryPlaceholder = this.countries[0].placeholder;
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
            phone: ['', [Validators.required, this.validatePhoneNumberInput.bind(this)]],
            selectedCountry: ['US', Validators.required],
        });
    }

    validatePhoneNumberInput(phoneNumberInput: AbstractControl): any {
        const inputValue: string = phoneNumberInput.value.toString();
        const phoneNumber: any = parsePhoneNumberFromString(inputValue, this.selectedCountry);
        if (phoneNumber) {
            if (phoneNumber.isValid()) {
                this.validPhoneNumber = this.validatePhoneNumberForm.controls['phone'].value.length;
                return null;
            }
            return {
                phoneNumber: {
                    valid: false,
                },
            };
        }
        return {
            phoneNumber: {
                valid: false,
            },
        };
    }
    checkPhoneNumber(): void {
        if (this.validatePhoneNumberForm.invalid) {
            this.validatePhoneNumberForm.controls['phone'].setErrors({ phoneNumberNotMatch: true });
        }
    }
    matcher(event: KeyboardEvent): void {
        const allowedRegex = /[0-9]/g;
        if (!event.key.match(allowedRegex)) {
            event.preventDefault();
        }
    }

    onCountryChange(countryDetails: any): void {
        this.selectedCountry = countryDetails.value;
        this.countryPlaceholder = this.countries.filter((item) => item.code === this.selectedCountry)[0].placeholder;
        const phoneNumber: any = parsePhoneNumberFromString(
            this.validatePhoneNumberForm.controls['phone'].value,
            this.selectedCountry
        );
        if (phoneNumber?.isValid()) {
            this.validatePhoneNumberForm.controls['phone'].setErrors(null);
        } else {
            this.validatePhoneNumberForm.controls['phone'].setErrors({ phoneNumberNotMatch: true });
        }
    }
    formatPhoneNumber(event: KeyboardEvent): void {
        const inputValue: any = this.validatePhoneNumberForm.controls['phone'].value;
        if (inputValue.length > this.validPhoneNumber - 1 && event.keyCode !== 46 && event.keyCode !== 8) {
            event.preventDefault();
        }
        const phoneNumber: any = parsePhoneNumberFromString(inputValue, this.selectedCountry);
        if (phoneNumber) {
            this.selectedPhoneNumber = phoneNumber.number;
            const asYouTypePhoneNumber = new AsYouType(this.selectedCountry).input(phoneNumber.nationalNumber);
            this.validatePhoneNumberForm.controls['phone'].setValue(
                asYouTypePhoneNumber.replace(/[^+\d]+/g, ' ').trim()
            );
        }
    }

    toggleMenu(): void {
        const drawerOpen = this._drawerService.getDrawerOpen();
        this._drawerService.setDrawerOpen(!drawerOpen);
    }
}
