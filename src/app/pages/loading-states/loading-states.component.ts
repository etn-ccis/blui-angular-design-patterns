import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { dataList, placeholderList } from './data';
import { StateService } from '../../services/state.service';

@Component({
    selector: 'app-loading-states',
    templateUrl: './loading-states.component.html',
    styleUrls: ['./loading-states.component.scss'],
})
export class LoadingStatesComponent implements OnInit {
    cols: number;
    isSmall: boolean;
    deviceList = placeholderList;

    constructor(
        private readonly _drawerService: StateService,
        private readonly _breakpointObserver: BreakpointObserver,
    ) {
        this._breakpointObserver
            .observe([Breakpoints.Handset, Breakpoints.Small, Breakpoints.Medium])
            .subscribe((result) => {
                const small = Object.keys(result.breakpoints)[0];
                const smMed = Object.keys(result.breakpoints)[2];
                const medium = Object.keys(result.breakpoints)[3];
                this.isSmall = result.breakpoints[small] || result.breakpoints[smMed];
                if (result.breakpoints[small]) {
                    this.cols = 1;
                } else if (result.breakpoints[smMed] || result.breakpoints[medium]) {
                    this.cols = 2;
                } else {
                    this.cols = 4;
                }
            });
    }

    ngOnInit(): void {
        this.refreshData();
    }

    refreshData(): void {
        this.deviceList = placeholderList;
        setTimeout(() => {
            this.deviceList = dataList;
        }, 3000);
    }

    toggleMenu(): void {
        const drawerOpen = this._drawerService.getDrawerOpen();
        this._drawerService.setDrawerOpen(!drawerOpen);
    }
}
