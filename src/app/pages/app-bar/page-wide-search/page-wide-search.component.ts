import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { StateService } from '../../../services/state.service';
import * as Colors from '@brightlayer-ui/colors';

@Component({
    selector: 'app-page-wide-search',
    templateUrl: './page-wide-search.component.html',
    styleUrls: ['./page-wide-search.component.scss'],
})
export class PageWideSearchComponent implements OnInit {
    isSmall: boolean;
    list = ['Apple', 'Grape', 'Orange', 'Pineapple', 'Watermelon'];
    searchText = '';
    toggleSearch = false;
    Colors = Colors;
    isEmptyFilteredList = false;

    @ViewChild('searchBar', {}) searchBar: ElementRef;

    constructor(
        private readonly _drawerService: StateService,
        private readonly _breakpointObserver: BreakpointObserver
    ) {}

    ngOnInit(): void {
        this._breakpointObserver
            .observe([Breakpoints.Small, Breakpoints.Handset])
            .subscribe((state: BreakpointState) => {
                this.isSmall = state.matches;
            });
    }

    openSearch(): void {
        this.toggleSearch = true;
        // focus the input after the animation completes to avoid a jerky transition
        setTimeout(() => this.searchBar.nativeElement.focus(), 250);
    }

    searchClose(): void {
        this.searchText = '';
        this.toggleSearch = false;
        this.isEmptyFilteredList = false;
    }

    toggleMenu(): void {
        const drawerOpen = this._drawerService.getDrawerOpen();
        this._drawerService.setDrawerOpen(!drawerOpen);
    }
}
