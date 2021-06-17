import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { StateService } from '../../../services/state.service';
import * as Colors from '@pxblue/colors';
@Component({
    selector: 'app-skeleton-loader',
    templateUrl: './skeleton-loader.component.html',
    styleUrls: ['./skeleton-loader.component.scss'],
})
export class SkeletonLoaderComponent implements OnInit, OnDestroy {
    isSmall: boolean;
    checked = false;
    data: any[] = [];
    colors = Colors;
    count = 3;
    bannerWidth = 350;
    actionLimit = 3;
    heroLimit = 1;
    showPlaceHolder = true;
    interval;

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

        this.interval = setInterval(() => {
            this.showPlaceHolder = !this.showPlaceHolder;
        }, 10000);
    }

    ngOnDestroy(): void {
        clearInterval(this.interval);
    }

    toggleMenu(): void {
        const drawerOpen = this._drawerService.getDrawerOpen();
        this._drawerService.setDrawerOpen(!drawerOpen);
    }

    onToggle(event: MatSlideToggleChange): void {
        this.checked = event.checked;
    }
}
