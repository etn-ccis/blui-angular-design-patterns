import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
@Component({
    selector: 'app-placeholder-list',
    templateUrl: './placeholder-list.component.html',
    styleUrls: ['./placeholder-list.component.scss'],
})
export class PlaceholderListComponent implements OnInit {
    isSmall: boolean;
    constructor(private readonly _breakpointObserver: BreakpointObserver) {}

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
}
