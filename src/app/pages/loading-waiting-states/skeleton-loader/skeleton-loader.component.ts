import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { StateService } from '../../../services/state.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import * as Colors from '@pxblue/colors';

const iconSet = require('@pxblue/icons-svg/icons.svg').default;

@Component({
    selector: 'app-skeleton-loader',
    templateUrl: './skeleton-loader.component.html',
    styleUrls: ['./skeleton-loader.component.scss'],
})
export class SkeletonLoaderComponent implements OnInit, OnDestroy {
    isSmall: boolean;
    checked = false;
    colors = Colors;
    showPlaceHolder = true;
    interval;

    constructor(
        private readonly _drawerService: StateService,
        private readonly _breakpointObserver: BreakpointObserver,
        private readonly _matIconRegistry: MatIconRegistry,
        private readonly _domSanitizer: DomSanitizer
    ) {
        this._matIconRegistry.addSvgIconSetInNamespace(
            'px-icons',
            this._domSanitizer.bypassSecurityTrustResourceUrl(iconSet)
        );
    }

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
        
        this.loadData();
    }

    ngOnDestroy(): void {
        clearInterval(this.interval);
    }

    loadData(): void {
        this.interval = setInterval(() => {
            this.showPlaceHolder = !this.showPlaceHolder;
        }, 5000);
    }

    toggleMenu(): void {
        const drawerOpen = this._drawerService.getDrawerOpen();
        this._drawerService.setDrawerOpen(!drawerOpen);
    }
}
