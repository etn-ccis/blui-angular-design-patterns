import { Component, OnInit, ViewChild, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StateService } from '../../../services/state.service';

@Component({
  selector: 'app-phone-number-format',
  templateUrl: './phone-number-format.component.html',
  styleUrls: ['./phone-number-format.component.scss']
})
export class PhoneNumberFormatComponent implements OnInit {
  isSmall: boolean;
  countryFormControl: FormControl;
  phoneNumberFormControl: FormControl;
    countries: any[] = [
      { value: 'US', viewValue: '+1 (US)' },
      { value: 'CAN', viewValue: '+1 (CAN)' },
      { value: 'KZ', viewValue: '+7 (KZ)' },
      { value: 'FRA', viewValue: '+33 (FRA)' },
  ];
  placeholder: any[] = [
    {'US': '### ### ####'},
    {'CAN': '### ### ### ####'},
  ];
  constructor(
    private readonly _drawerService: StateService,
    private readonly _breakpointObserver: BreakpointObserver,
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

  // ngAfterViewInit(): void {
  //   this.initForm();
  // }

  initForm(): void {
    this.countryFormControl = new FormControl('US', Validators.required);
    this.phoneNumberFormControl = new FormControl('', Validators.required);
  }

  toggleMenu(): void {
    const drawerOpen = this._drawerService.getDrawerOpen();
    this._drawerService.setDrawerOpen(!drawerOpen);
  }
}
