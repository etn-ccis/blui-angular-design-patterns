import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { StateService } from '../../../services/state.service';
import * as Colors from '@pxblue/colors';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
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
            .observe([Breakpoints.Small])
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

    clearSearchText(): void {
        this.searchText = '';
        this.searchBar.nativeElement.focus();
    }
}
