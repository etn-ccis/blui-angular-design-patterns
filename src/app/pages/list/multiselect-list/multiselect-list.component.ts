import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { StateService } from '../../../services/state.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MultiselectSnackbarComponent } from './multiselect-snackbar.component';
import { MultiselectListService } from './multiselect-list.service';

export type ListItem = {
    id: number;
    name: string;
    details: string;
    status: string;
};

@Component({
    selector: 'app-multiselect-list',
    templateUrl: './multiselect-list.component.html',
    styleUrls: ['./multiselect-list.component.scss'],
})
export class MultiselectListComponent implements OnInit {
    isSmall: boolean;

    constructor(
        private readonly _snackBar: MatSnackBar,
        private readonly _drawerService: StateService,
        public readonly selectionService: MultiselectListService,
        private readonly _breakpointObserver: BreakpointObserver
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

    selectItem(item: ListItem): void {
        const isSnackbarAVisible = this.selectionService.getSelectedItems().length > 0;
        this.selectionService.selectItem(item);
        if (!isSnackbarAVisible) {
            this._snackBar.openFromComponent(MultiselectSnackbarComponent);
        }
    }

    toggleMenu(): void {
        const drawerOpen = this._drawerService.getDrawerOpen();
        this._drawerService.setDrawerOpen(!drawerOpen);
    }
}
