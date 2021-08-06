import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { FormGroup } from '@angular/forms';
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
        { value: 'state-1', viewValue: 'State 1' },
        { value: 'state-2', viewValue: 'State 2' },
        { value: 'state-3', viewValue: 'State 3' },
    ];

    constructor(
        private readonly _drawerService: StateService,
        private readonly _breakpointObserver: BreakpointObserver
    ) {}

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

    toggleMenu(): void {
        const drawerOpen = this._drawerService.getDrawerOpen();
        this._drawerService.setDrawerOpen(!drawerOpen);
    }
}
