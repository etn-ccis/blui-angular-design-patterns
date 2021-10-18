import { Component } from '@angular/core';
import * as Colors from '@pxblue/colors';
import { StateService } from '../../../services/state.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
@Component({
    selector: 'app-status-list',
    templateUrl: './status-list.component.html',
    styleUrls: ['./status-list.component.scss'],
})
export class StatusListComponent {
    colors = Colors;
    isSmall: boolean;

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
