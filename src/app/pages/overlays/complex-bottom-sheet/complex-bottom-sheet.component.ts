import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { DataService, DataItem } from './data.service';
import { BottomSheet } from './bottom-sheet/bottom-sheet';
import * as Colors from '@brightlayer-ui/colors';
import { StateService } from '../../../services/state.service';

@Component({
    selector: 'app-complex-bottom-sheet',
    templateUrl: './complex-bottom-sheet.component.html',
    styleUrls: ['./complex-bottom-sheet.component.scss'],
})
export class ComplexBottomSheetComponent implements OnInit {
    isSmall: boolean;
    data: DataItem[] = [];
    Colors = Colors;

    constructor(
        private readonly _drawerService: StateService,
        private readonly _breakpointObserver: BreakpointObserver,
        private readonly _bottomSheet: MatBottomSheet,
        private readonly _dataService: DataService
    ) {}

    ngOnInit(): void {
        this._dataService.list.subscribe((list: DataItem[]): void => {
            this.data = list;
        });

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
        this._bottomSheet.open(BottomSheet, { restoreFocus: false, panelClass: 'bottomPanel' });
    }
}
