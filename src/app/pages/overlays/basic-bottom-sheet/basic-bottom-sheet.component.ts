import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { StateService } from '../../../services/state.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { DataService } from './data.service';
import { BottomSheet } from './bottom-sheet/bottom-sheet';
import * as Colors from '@brightlayer-ui/colors';

@Component({
    selector: 'app-basic-bottom-sheet',
    templateUrl: './basic-bottom-sheet.component.html',
    styleUrls: ['./basic-bottom-sheet.component.scss'],
})
export class BasicBottomSheetComponent implements OnInit {
    isSmall: boolean;
    data: any[] = [];
    Colors = Colors;

    constructor(
        private readonly _drawerService: StateService,
        private readonly _breakpointObserver: BreakpointObserver,
        private readonly _bottomSheet: MatBottomSheet,
        private readonly _dataService: DataService
    ) {}

    ngOnInit(): void {
        this.data = this._dataService.data;

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

    showBottomSheet(): void {
        this._bottomSheet.open(BottomSheet, { restoreFocus: false });
    }
}
