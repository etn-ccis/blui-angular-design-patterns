import { Component } from '@angular/core';
import * as Colors from '@pxblue/colors';
import { StateService } from '../../../services/state.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

export type ListItem = {
    id: number;
    statusColor: string;
    avatar: boolean;
    icon: string;
    showTimeStamp: boolean;
    time: string;
    date: string;
    showTag: boolean;
    titleLabel: string;
    titleDesc: string;
    subtitle: string;
};

@Component({
    selector: 'app-status-list',
    templateUrl: './status-list.component.html',
    styleUrls: ['./status-list.component.scss'],
})
export class StatusListComponent {
    colors = Colors;
    infoListItemExample: ListItem[];
    infoListItemExample2: ListItem[];
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
        this.infoListItemExample = [
            {
                id: 1,
                statusColor: Colors.red[500],
                avatar: true,
                icon: 'notifications',
                showTimeStamp: true,
                time: '8:21',
                date: '11/23/',
                showTag: true,
                titleLabel: 'High Humidity',
                titleDesc: 'PX2341 sensor level 9',
                subtitle: 'Cherrington Station < Moon Township',
            },
            {
                id: 2,
                statusColor: Colors.orange[500],
                avatar: false,
                icon: 'maintenance',
                showTimeStamp: true,
                time: '7:48',
                date: '11/23/',
                showTag: false,
                titleLabel: 'Battery Service',
                titleDesc: 'EATON GH142',
                subtitle: 'Cherrington Station < Moon Township',
            },
            {
                id: 3,
                statusColor: null,
                avatar: false,
                icon: 'notifications',
                showTimeStamp: true,
                time: '2:13',
                date: '11/23/',
                showTag: false,
                titleLabel: 'Bypass Over Frequency',
                titleDesc: 'A2 Max Reval',
                subtitle: 'Tuscarawas R. < Beaver ',
            },
        ];
        this.infoListItemExample2 = this.infoListItemExample.slice(0, 2);
    }

    toggleMenu(): void {
        const drawerOpen = this._drawerService.getDrawerOpen();
        this._drawerService.setDrawerOpen(!drawerOpen);
    }
}
