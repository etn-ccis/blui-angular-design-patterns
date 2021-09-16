import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { StateService } from '../../../services/state.service';

type DrawerItem = {
    title: string;
    icon: string;
};

@Component({
    selector: 'app-menu-in-a-drawer',
    templateUrl: './menu-in-a-drawer.component.html',
    styleUrls: ['./menu-in-a-drawer.component.scss'],
})
export class MenuInADrawerComponent implements OnInit {
    isSmall: boolean;
    isTempDrawerOpen: boolean;
    selected: string;

    topItems: DrawerItem[] = [
        {
            title: 'Dashboard',
            icon: 'dashboard',
        },
        {
            title: 'Notifications',
            icon: 'notifications',
        },
        {
            title: 'Locations',
            icon: 'location_on',
        },
        {
            title: 'Analyics',
            icon: 'analytics',
        },
        {
            title: 'Assets',
            icon: 'devices',
        },
    ];

    bottomItems: DrawerItem[] = [
        {
            title: 'Change Password',
            icon: 'vpn_key',
        },
        {
            title: 'Preferences',
            icon: 'settings',
        },
        {
            title: 'Logout',
            icon: 'logout',
        },
    ];

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

    select(item: DrawerItem): void {
        this.selected = item.title;
    }
}
