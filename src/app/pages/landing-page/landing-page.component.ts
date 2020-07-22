import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { StateService } from 'src/app/services/state.service';
import * as Colors from '@pxblue/colors';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss'],
    animations: [
        trigger('headerFadeInAnimation', [
            state('in', style({ opacity: 1 })),

            transition(':enter', [style({ opacity: 0 }), animate('500ms 250ms')]),
        ]),
        trigger('bodyFadeInAnimation', [
            state('in', style({ opacity: 1 })),

            transition(':enter', [style({ opacity: 0 }), animate('1500ms 500ms')]),
        ]),
        trigger('linksFadeInAnimation', [
            state('in', style({ opacity: 1 })),

            transition(':enter', [style({ opacity: 0 }), animate('1000ms 1250ms')]),
        ]),
    ],
})
export class LandingPageComponent implements OnInit {
    Colors = Colors;
    isSmall: boolean;

    constructor(
        private readonly _drawerService: StateService,
        private readonly _breakpointObserver: BreakpointObserver
    ) {}

    ngOnInit(): void {
        this._breakpointObserver
            .observe([Breakpoints.Small, Breakpoints.Handset])
            .subscribe((breakpointState: BreakpointState) => {
                if (breakpointState.matches) {
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
}
