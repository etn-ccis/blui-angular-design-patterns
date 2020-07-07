import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { StateService } from 'src/app/services/state.service';

@Component({
    selector: 'app-data-list',
    templateUrl: './data-list.component.html',
    styleUrls: ['./data-list.component.scss'],
})
export class DataListComponent implements OnInit {
    list = [
        {
            name: 'George Washington',
            year: 1789,
        },
        {
            name: 'John Adams',
            year: 1796,
        },
        {
            name: 'Thomas Jefferson',
            year: 1800,
        },
        {
            name: 'James Madison',
            year: 1808,
        },
        {
            name: 'James Monroe',
            year: 1812,
        },
    ];
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
