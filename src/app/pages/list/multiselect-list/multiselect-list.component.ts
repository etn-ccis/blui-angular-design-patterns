import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { StateService } from 'src/app/services/state.service';

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
    data: ListItem[] = [];
    enableFooter = false;
    selectedItems = [];
    isSmall: boolean;

    constructor(
        private readonly _drawerService: StateService,
        private readonly _breakpointObserver: BreakpointObserver
    ) {}

    ngOnInit(): void {
        for (let i = 1; i <= 10; i++) {
            this.data.push(this.createRandomItem());
        }

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

    createItem(index: number, randomStatus: string): ListItem {
        return { id: index, name: `Item ${index}`, details: `Status: ${randomStatus}`, status: randomStatus };
    }

    createRandomItem(): ListItem {
        const int = parseInt(`${Math.random() * 100}`, 10);
        const randomStatus = Math.random() >= 0.3 ? 'normal' : 'alarm';
        return this.createItem(int, randomStatus);
    }

    onAddItem(): void {
        this.data.push(this.createRandomItem());
    }

    onSelected(item: ListItem): void {
        if (this.selectedItems.indexOf(item) === -1) {
            this.selectedItems.push(item);
        } else {
            this.selectedItems.splice(this.selectedItems.indexOf(item), 1);
        }
    }

    isSelected(item: ListItem): boolean {
        return this.selectedItems.indexOf(item) !== -1;
    }

    deleteItems(): void {
        this.selectedItems.forEach((item) => {
            const index = this.data.indexOf(item);
            this.data.splice(index, 1);
        });
        this.selectedItems = [];
    }

    cancelItems(): void {
        this.selectedItems = [];
    }

    toggleMenu(): void {
        const drawerOpen = this._drawerService.getDrawerOpen();
        this._drawerService.setDrawerOpen(!drawerOpen);
    }
}
