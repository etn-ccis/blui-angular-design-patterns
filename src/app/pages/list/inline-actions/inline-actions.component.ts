import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../services/state.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import * as Colors from '@brightlayer-ui/colors';

export type Data = {
    title: string;
    showActionItems: boolean;
    showTag: boolean;
};

@Component({
    selector: 'app-inline-actions',
    templateUrl: './inline-actions.component.html',
    styleUrls: ['./inline-actions.component.scss'],
})
export class InlineActionsComponent implements OnInit {
    colors = Colors;
    data: Data[];
    isSmall: boolean;
    constructor(
        private readonly _drawerService: StateService,
        private readonly _breakpointObserver: BreakpointObserver
    ) {}

    ngOnInit(): void {
        this.loadData();
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

    showAction(index: number, showBtn: boolean): void {
        this.data[index].showActionItems = showBtn;
    }

    hideAction(index: number, showBtn: boolean): void {
        this.data[index].showActionItems = showBtn;
    }

    deleteActions(index: number): void {
        this.data.splice(index, 1);
    }
    loadData(): void {
        this.data = [
            {
                title: 'High Humidity',
                showActionItems: false,
                showTag: true,
            },
            {
                title: 'Battery Service',
                showActionItems: false,
                showTag: false,
            },
            {
                title: 'Bypass Over Frequency',
                showActionItems: false,
                showTag: false,
            },
        ];
    }
}
