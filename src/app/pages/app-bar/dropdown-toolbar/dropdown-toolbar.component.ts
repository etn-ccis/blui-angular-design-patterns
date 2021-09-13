import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { StateService } from '../../../services/state.service';
import { DropdownToolbarComponent as PxbDropdownToolbar } from '@pxblue/angular-components';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { DropdownToolbarStateService } from './dropdown-toolbar.service';
import { DropdownToolbarBottomSheetExample } from './dropdown-toolbar-bottomsheet.component';

export const menuItems: string[] = ['Item 1', 'Item 2', 'Item 3'];

@Component({
    selector: 'app-dropdown-toolbar',
    templateUrl: './dropdown-toolbar.component.html',
})
export class DropdownToolbarComponent implements OnInit, AfterViewInit {
    isSmall: boolean;
    items = menuItems;

    @ViewChild('toolbar') deep: PxbDropdownToolbar;

    constructor(
        private readonly _drawerService: StateService,
        private readonly _breakpointObserver: BreakpointObserver,
        private readonly _bottomSheet: MatBottomSheet,
        private readonly _stateService: DropdownToolbarStateService
    ) {}

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

    ngAfterViewInit(): void {
        this.deep.menuTrigger.toggleMenu = (): void => {
            if (this.isSmall) {
                this.openBottomSheet();
            } else {
                this.deep.menuTrigger.openMenu();
            }
        };
    }

    openBottomSheet(): void {
        this._bottomSheet.open(DropdownToolbarBottomSheetExample);
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
