import { Component, OnInit, ElementRef } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StateService } from '../../../services/state.service';
@Component({
    selector: 'app-sectioned-form',
    templateUrl: './sectioned-form.component.html',
    styleUrls: ['./sectioned-form.component.scss'],
})
export class SectionedFormComponent implements OnInit {
    isSmall: boolean;
    factoryDetailsForm: FormGroup;
    selectedLevel = 'level-2';
    selectedState = '';
    levels: any[] = [
        { value: 'level-1', viewValue: 'Level I (Regional)' },
        { value: 'level-2', viewValue: 'Level II (Regional)' },
        { value: 'level-3', viewValue: 'Level III (Regional)' },
    ];

    states: any[] = [
        { value: 'california', viewValue: 'California' },
        { value: 'michigan', viewValue: 'Michigan' },
        { value: 'georgia', viewValue: 'Georgia' },
    ];

    constructor(
        private readonly _drawerService: StateService,
        private readonly _breakpointObserver: BreakpointObserver,
        private readonly _formBuilder: FormBuilder,
        private readonly _el: ElementRef
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
        this.factoryDetailsForm = this._formBuilder.group({
            factoryName: ['', Validators.required],
            levelOption: ['level-2', Validators.required],
            pxbProtectionChecked: [false],
            addressOne: ['', Validators.required],
            addressTwo: [''],
            city: ['', Validators.required],
            state: ['', Validators.required],
            zipCode: ['', Validators.required],
            country: [{ value: 'United States', disabled: true }, [Validators.required]],
            contactName: ['', Validators.required],
            contactLastName: [''],
            email: [
                '',
                Validators.compose([
                    Validators.required,
                    Validators.email,
                    Validators.pattern(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i),
                ]),
            ],
        });
    }

    toggleMenu(): void {
        const drawerOpen = this._drawerService.getDrawerOpen();
        this._drawerService.setDrawerOpen(!drawerOpen);
    }

    submit(): void {
        const firstInvalidControl = this._el.nativeElement.querySelector('form .ng-invalid');

        firstInvalidControl.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
}