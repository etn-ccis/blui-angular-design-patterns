import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { DropdownToolbarComponent as PxbDropdownToolbar } from '@pxblue/angular-components';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { DropdownToolbarStateService } from './dropdown-toolbar.service';
import { DropdownToolbarBottomSheetExample } from './dropdown-toolbar-bottomsheet.component';
import { StateService } from '../../../services/state.service';
import { menuItems } from './menuItems';

@Component({
    selector: 'app-dropdown-toolbar',
    templateUrl: './dropdown-toolbar.component.html',
})
export class DropdownToolbarComponent implements OnInit, AfterViewInit {
    isSmall: boolean;
    isHandset: boolean;
    items = menuItems;

    @ViewChild('toolbar') dropdownToolbar: PxbDropdownToolbar;

    constructor(
        private readonly _drawerService: StateService,
        private readonly _breakpointObserver: BreakpointObserver,
        private readonly _bottomSheet: MatBottomSheet,
        private readonly _stateService: DropdownToolbarStateService
    ) {}

    ngOnInit(): void {
        this._breakpointObserver.observe([Breakpoints.Small]).subscribe((state: BreakpointState) => {
            this.isSmall = state.matches;
        });

        this._breakpointObserver.observe([Breakpoints.Handset]).subscribe((state: BreakpointState) => {
            this.isHandset = state.matches;
        });
    }

    ngAfterViewInit(): void {
        this.dropdownToolbar.menuTrigger.toggleMenu = (): void => {
            if (this.isHandset) {
                this.openBottomSheet();
            } else {
                this.dropdownToolbar.menuTrigger.openMenu();
            }
        };
    }

    openBottomSheet(): void {
        this._bottomSheet.open(DropdownToolbarBottomSheetExample, {
            panelClass: 'app-dropdown-toolbar-bottomsheet-overlay',
        });
    }

    toggleMenu(): void {
        const drawerOpen = this._drawerService.getDrawerOpen();
        this._drawerService.setDrawerOpen(!drawerOpen);
    }

    setSelected(item: string): void {
        this._stateService.setSelected(item);
    }

    getSelected(): string {
        return this._stateService.getSelected();
    }
}
