import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../services/state.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
// import { MatDialog } from '@angular/material/dialog';
// import { DialogContentExampleDialog } from './dialog-content-example.component';

export type ListItem = {
    id: number;
    name: string;
};

@Component({
    selector: 'app-inline-button-panel',
    templateUrl: './inline-button-panel.component.html',
    styleUrls: ['./inline-button-panel.component.scss'],
})
export class InlineButtonPanelComponent implements OnInit {
    data: ListItem[] = [];
    item: ListItem;
    isSmall: boolean;
    isDialogVisible: boolean;

    constructor(
        private readonly _drawerService: StateService,
        private readonly _breakpointObserver: BreakpointObserver // public dialog: MatDialog
    ) {}

    ngOnInit(): void {
        this.data = [
            {
                id: 1,
                name: 'Item 01',
            },
            {
                id: 2,
                name: 'Item 02',
            },
            {
                id: 3,
                name: 'Item 03',
            },
        ];

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

    createItem(index: number): ListItem {
        return { id: index, name: index < 10 ? `Item 0${index}` : `Item ${index}` };
    }

    onAddItem(): void {
        this.data.push(this.createItem(this.data.length + 1));
    }

    onRemoveItem(item: ListItem): void {
        this.data.splice(this.data.indexOf(item), 1);
    }

    onRemoveAll(): void {
        this.isDialogVisible = true;
        // this._snackBar.(DialogOverviewExampleDialog);
        // this.data = [];
    }

    // openDialog(): void {
    //     const dialogRef = this.dialog.open(DialogContentExampleDialog);

    //     dialogRef.afterClosed().subscribe((result) => {
    //         // eslint-disable-next-line no-console
    //         console.log(`Dialog result: ${result}`);
    //     });
    // }

    toggleMenu(): void {
        const drawerOpen = this._drawerService.getDrawerOpen();
        this._drawerService.setDrawerOpen(!drawerOpen);
    }
}
