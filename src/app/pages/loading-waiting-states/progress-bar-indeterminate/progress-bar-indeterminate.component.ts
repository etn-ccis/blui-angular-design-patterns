import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { StateService } from '../../../services/state.service';

@Component({
    selector: 'app-progress-bar-indeterminate',
    templateUrl: './progress-bar-indeterminate.component.html',
    styleUrls: ['./progress-bar-indeterminate.component.scss'],
})
export class ProgressBarIndeterminateComponent implements OnInit {
    isSmall: boolean;
    checked = false;

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

    onToggle(event: MatSlideToggleChange): void {
        this.checked = event.checked;
    }
}
