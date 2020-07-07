import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

export type ListItem = {
    id: number;
    name: string;
    details: string;
};

@Component({
    selector: 'app-action-list',
    templateUrl: './action-list.component.html',
    styleUrls: ['./action-list.component.scss'],
})
export class ActionListComponent implements OnInit {
    data: ListItem[] = [];
    item: ListItem;
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

    createItem(index: number): ListItem {
        return { id: index, name: `Item ${index}`, details: `item ${index} details` };
    }

    createRandomItem(): ListItem {
        const int: number = parseInt(`${Math.random() * 100}`, 10);
        return this.createItem(int);
    }

    onAddItem(): void {
        this.data.push(this.createRandomItem());
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
}
