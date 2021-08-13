import { Component, OnInit, ViewChild, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { FormGroup, Validators, FormBuilder, AbstractControl  } from '@angular/forms';
import { StateService } from '../../../services/state.service';
import { parsePhoneNumberFromString, AsYouType } from 'libphonenumber-js';

@Component({
    selector: 'app-phone-number-format',
    templateUrl: './phone-number-format.component.html',
    styleUrls: ['./phone-number-format.component.scss'],
})
export class PhoneNumberFormatComponent implements OnInit {
    isSmall: boolean;
    selectedCountry: any = 'US';
    selectedPhoneNumber: any;
    register: FormGroup;
    countries: any[] = [
        { code: 'US', name: '+1 (US)', placeholder: '### ### ####' },
        { code: 'CA', name: '+1 (CAN)', placeholder: '### ### ### ####' },
        { code: 'KZ', name: '+7 (KZ)', placeholder: '### ### ### ####' },
        { code: 'FRA', name: '+33 (FRA)', placeholder: '### ### ### ####' },
    ];
    countryPlaceholder = '### ### ####';
    asYouType = new AsYouType();
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

    private initForm(): void{
        this.register = this._formBuilder.group({
                phone: ['', [Validators.required, this._validatePhoneNumberInput.bind(this)]]
            });
      }
    
      _validatePhoneNumberInput(c: AbstractControl): object {
        let inputValue: string = c.value.toString();
        let phoneNumber: any = parsePhoneNumberFromString(inputValue, this.selectedCountry);
        if(phoneNumber){
          if(phoneNumber.isValid()){
            return null;
          } else {
            return {
              phoneNumber: {
                valid: false
              }
            }
          }
        } else {
          return {
            phoneNumber: {
              valid: false
            }
          }
        }
        }
    
      resetPhoneNumber(event: any): void {
            this.register.controls['phone'].setValue('');
        }
    
      formatPhoneNumber(event: any): void {
            let inputValue: any = this.register.controls['phone'].value;
            let phoneNumber: any = parsePhoneNumberFromString(inputValue, this.selectedCountry);
            if(phoneNumber){
                this.selectedPhoneNumber = phoneNumber.number;
                let asYouTypePhoneNumber = new AsYouType(this.selectedCountry).input(phoneNumber.nationalNumber)
                this.register.controls['phone'].setValue(asYouTypePhoneNumber.replace(/[^+\d]+/g, " ").trim());
            }
        }

    toggleMenu(): void {
        const drawerOpen = this._drawerService.getDrawerOpen();
        this._drawerService.setDrawerOpen(!drawerOpen);
    }
}
