import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../services/state.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
    selector: 'app-inline-local-actions',
    templateUrl: './inline-local-actions.component.html',
    styleUrls: ['./inline-local-actions.component.scss'],
})
export class InlineLocalActionsComponent implements OnInit {
    isSmall: boolean;
    emailNotifications = false;
    smsNotifications = true;
    selected = 'English (U.S.)';
    isLeftPaneVisible = true;
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

    showItemDetails(): void {
        this.isLeftPaneVisible = false;
    }
}
