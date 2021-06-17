import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { StateService } from '../../../services/state.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

const icon = require('@pxblue/icons-svg/breaker.svg').default; // individual icon
const iconSet = require('@pxblue/icons-svg/icons.svg').default; // full set
import * as Colors from '@pxblue/colors';
@Component({
    selector: 'app-skeleton-loader',
    templateUrl: './skeleton-loader.component.html',
    styleUrls: ['./skeleton-loader.component.scss'],
})
export class SkeletonLoaderComponent implements OnInit, OnDestroy {
    isSmall: boolean;
    checked = false;
    colors = Colors;
    count = 3;
    heroLimit = 2;
    showPlaceHolder = true;
    interval;

    constructor(
        private readonly _drawerService: StateService,
        private readonly _breakpointObserver: BreakpointObserver,
        private matIconRegistry: MatIconRegistry,
        private domSanitizer: DomSanitizer
    ) {
        this.matIconRegistry.addSvgIconSetInNamespace(
            'px-icons',
            this.domSanitizer.bypassSecurityTrustResourceUrl(iconSet)
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

        this.interval = setInterval(() => {
            this.showPlaceHolder = !this.showPlaceHolder;
        }, 5000);
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
