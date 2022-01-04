import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../services/state.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { LocalActionsDialogComponent } from './local-actions-dialog/local-actions-dialog.component';

export type DialogData = {
    deviceName: string;
};

@Component({
    selector: 'app-inline-local-actions',
    templateUrl: './inline-local-actions.component.html',
    styleUrls: ['./inline-local-actions.component.scss'],
})
export class InlineLocalActionsComponent implements OnInit {
    isSmall: boolean;
    emailNotifications = false;
    smsNotifications = true;
    selected = 'English (United States)';
    isLeftPaneVisible = true;
    deviceName = 'A2 Max Reveal';
    constructor(
        private readonly _drawerService: StateService,
        private readonly _breakpointObserver: BreakpointObserver,
        public dialog: MatDialog
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

    openDialog(): void {
        const dialogRef = this.dialog.open(LocalActionsDialogComponent, {
            width: '450px',
            height: '624px',
            data: { deviceName: this.deviceName },
        });

        dialogRef.afterClosed().subscribe((result) => {
            this.deviceName = result;
        });
    }

    toggleMenu(): void {
        const drawerOpen = this._drawerService.getDrawerOpen();
        this._drawerService.setDrawerOpen(!drawerOpen);
    }

    showItemDetails(): void {
        this.isLeftPaneVisible = false;
    }
}
