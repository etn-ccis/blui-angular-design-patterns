import { Component, OnInit, NgZone } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/scrolling';
import { map } from 'rxjs/operators';
import { presidents } from './data';
import { StateService } from '../../../services/state.service';

@Component({
    selector: 'app-collapsible-app-bar',
    templateUrl: './collapsible-app-bar.component.html',
    styleUrls: ['./collapsible-app-bar.component.scss'],
})
export class CollapsibleAppBarComponent implements OnInit {
    isSmall: boolean;
    list = presidents;
    private readonly SHRINK_TOP_SCROLL_POSITION = 64;
    shrinkToolbar = false;
    scrollingSubscription: any;
    scrollTop: number;

    constructor(
        private readonly _drawerService: StateService,
        private readonly _breakpointObserver: BreakpointObserver,
        private readonly _scrollDispatcher: ScrollDispatcher,
        private readonly _ngZone: NgZone
    ) {}

    ngOnInit(): void {
        this._scrollDispatcher
            .scrolled()
            .pipe(map((event: CdkScrollable) => this.getScrollPosition(event)))
            .subscribe((scrollTop) => this._ngZone.run(() => this.setScroll(scrollTop)));

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

    getScrollPosition(event: CdkScrollable): number {
        if (event) {
            return event.getElementRef().nativeElement.scrollTop;
        }
        return window.pageYOffset;
    }

    setScroll(scrollTop: number): void {
        this.shrinkToolbar = scrollTop > this.SHRINK_TOP_SCROLL_POSITION ? true : false;
        this.scrollTop = scrollTop;
    }

    toggleMenu(): void {
        const drawerOpen = this._drawerService.getDrawerOpen();
        this._drawerService.setDrawerOpen(!drawerOpen);
    }
}
