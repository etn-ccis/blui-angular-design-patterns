import { Component } from '@angular/core';
import * as Colors from '@pxblue/colors';
import { StateService } from 'src/app/services/state.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

export type ListItem = {
    id: number;
    name: string;
    details: string;
    status: string;
    icon: string;
    isNew: boolean;
};

@Component({
    selector: 'app-status-list',
    templateUrl: './status-list.component.html',
    styleUrls: ['./status-list.component.scss'],
})
export class StatusListComponent {
    data: any[] = [];
    colors = Colors;
    isSmall: boolean;

    constructor(
        private readonly _drawerService: StateService,
        private readonly _breakpointObserver: BreakpointObserver
    ) {}

    ngOnInit(): void {
        for (let i = 1; i <= 10; i++) {
            this.data.push(this.createRandomItem());
        }

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

    createItem(index: number, randomStatus: string, randomIcon: string, isNew: boolean): ListItem {
        return {
            id: index,
            name: `Item ${index}`,
            details: `Status: ${randomStatus}`,
            status: randomStatus,
            icon: randomIcon,
            isNew: isNew,
        };
    }
    createRandomItem(): ListItem {
        const int = parseInt(`${Math.random() * 100}`, 10);
        const randomNumber = Math.random();
        const randomStatus = randomNumber <= 0.3 ? 'normal' : randomNumber <= 0.8 ? 'warning' : 'alarm';
        const randomIcon = randomNumber <= 0.3 ? 'home' : randomNumber <= 0.8 ? 'warning' : 'notifications';
        const isNew = randomNumber <= 0.1;
        return this.createItem(int, randomStatus, randomIcon, isNew);
    }

    setAlarm(status: string): boolean {
        return status === 'alarm' ? true : false;
    }

    getIconColor(status: string): any {
        switch (status) {
            case 'normal':
                return this.colors.black[500];
            case 'warning':
                return this.colors.orange[500];
            case 'alarm':
                return this.colors.white[50];
            default:
                return this.colors.black[500];
        }
    }

    toggleMenu(): void {
        const drawerOpen = this._drawerService.getDrawerOpen();
        this._drawerService.setDrawerOpen(!drawerOpen);
    }
}
