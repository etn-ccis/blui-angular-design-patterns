import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { StateService } from '../../../services/state.service';

@Component({
    selector: 'app-contextual-spinners',
    templateUrl: './contextual-spinners.component.html',
    styleUrls: ['./contextual-spinners.component.scss'],
})
export class ContextualSpinnersComponent implements OnInit {
    isSmall: boolean;
    checked = false;
    buttonClicked = false;
    flatButtonClicked = false;

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

    loadSpinner(): void {
        this.buttonClicked = true;
        setTimeout(() => {
            this.buttonClicked = false;
        }, 3000);
    }

    loadSpinner1(): void {
        this.flatButtonClicked = true;
        setTimeout(() => {
            this.flatButtonClicked = false;
        }, 3000);
    }
}
