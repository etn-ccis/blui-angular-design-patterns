import { Component } from '@angular/core';
import * as Colors from '@pxblue/colors';
import { StateService } from 'src/app/services/state.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

export type ListItem = {
    id: number;
    name: string;
    details: string;
    status: string;
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

    createItem(index: number, randomStatus: string): ListItem {
        return { id: index, name: `Item ${index}`, details: `Status: ${randomStatus}`, status: randomStatus };
    }
    createRandomItem(): ListItem {
        const int = parseInt(`${Math.random() * 100}`, 10);
        const randomStatus = Math.random() >= 0.3 ? 'normal' : 'alarm';
        return this.createItem(int, randomStatus);
    }

    setAlarm(status: string): boolean {
        return status === 'alarm' ? true : false;
    }

    toggleMenu(): void {
        const drawerOpen = this._drawerService.getDrawerOpen();
        this._drawerService.setDrawerOpen(!drawerOpen);
    }
}
