import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../services/state.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { PromptDialog } from './dialog/prompt-dialog';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from './services/dialog-service';
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
        private readonly _breakpointObserver: BreakpointObserver,
        public dialog: MatDialog,
        private readonly _dialogService: DialogService
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

        this._dialogService.deleteData.subscribe((deleteAll: boolean) => {
            if (deleteAll) {
                this.onRemoveAll();
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
        this.data = [];
    }

    toggleMenu(): void {
        const drawerOpen = this._drawerService.getDrawerOpen();
        this._drawerService.setDrawerOpen(!drawerOpen);
    }

    openDialog(): void {
        this.dialog.open(PromptDialog, {
            width: '280px',
        });
    }
}
