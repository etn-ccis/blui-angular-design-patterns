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
    deviceName = 'A2 Max Reveal';
    emailNotifications = false;
    isLeftPaneVisible = true;
    isSmall: boolean;
    languageSelected = 'English (United States)';
    showDeviceEditView = false;
    showLanguageListView = false;
    showScoreCard = false;
    smsNotifications = true;

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

    backToLeftPanel(): void {
        this.isLeftPaneVisible = true;
        this.showScoreCard = false;
        this.showDeviceEditView = false;
        this.showLanguageListView = false;
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(LocalActionsDialogComponent, {
            width: '450px',
            height: '624px',
            data: { deviceName: this.deviceName },
        });

        dialogRef.afterClosed().subscribe((result) => {
            if (result !== undefined) {
                this.deviceName = result;
            }
        });
    }

    showItemDetails(): void {
        this.isLeftPaneVisible = false;
        this.showDeviceEditView = false;
        this.showLanguageListView = false;
        this.showScoreCard = true;
    }

    showDeviceEdit(): void {
        this.isLeftPaneVisible = false;
        this.showDeviceEditView = true;
        this.showLanguageListView = false;
        this.showScoreCard = false;
    }

    showLanguageList(event: MouseEvent): void {
        if (this.isSmall) {
            this.isLeftPaneVisible = false;
            this.showDeviceEditView = false;
            this.showLanguageListView = true;
            this.showScoreCard = false;
        } else {
            event.preventDefault();
        }
    }

    toggleMenu(): void {
        const drawerOpen = this._drawerService.getDrawerOpen();
        this._drawerService.setDrawerOpen(!drawerOpen);
    }

    updateLanguage(language: string): void {
        this.isLeftPaneVisible = true;
        this.languageSelected = language;
    }

    updateMobileDeviceName(newMobileDeviceName: string): void {
        this.isLeftPaneVisible = true;
        this.deviceName = newMobileDeviceName;
    }
}
