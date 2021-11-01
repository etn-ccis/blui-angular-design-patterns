import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../services/state.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

export type FilterDaysOption = {
    title: string;
    value: number;
};

export type FilterData = {
    title: string;
    subtitle: string;
    value: number;
};

@Component({
    selector: 'app-in-panel-header',
    templateUrl: './in-panel-header.component.html',
    styleUrls: ['./in-panel-header.component.scss'],
})
export class InPanelHeaderComponent implements OnInit {
    isSmall: boolean;
    filterDaysOption: FilterDaysOption[] = [
        { title: '30 days', value: 30 },
        { title: '15 days', value: 15 },
        { title: '7 days', value: 7 },
    ];

    data: FilterData[] = [
        {
            title: 'Item 01',
            subtitle: 'Registered 7 days ago',
            value: 8,
        },
        {
            title: 'Item 02',
            subtitle: 'Registered 15 days ago',
            value: 15,
        },
        {
            title: 'Item 03',
            subtitle: 'Registered 30 days ago',
            value: 30,
        },
    ];
    selectedFilter = this.filterDaysOption[0].value;
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

    onDayFilterChange(filterDetails: any): void {
        this.selectedFilter = filterDetails.value;
    }

    toggleMenu(): void {
        const drawerOpen = this._drawerService.getDrawerOpen();
        this._drawerService.setDrawerOpen(!drawerOpen);
    }
}
