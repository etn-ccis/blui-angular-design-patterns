import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { StateService } from 'src/app/services/state.service';

type DataItem = {
    id: number;
    name: string;
    details: string;
};

@Component({
    selector: 'app-responsive-table',
    templateUrl: './responsive-table.component.html',
    styleUrls: ['./responsive-table.component.scss'],
})
export class ResponsiveTableComponent implements OnInit {
    isSmall: boolean;
    data: DataItem[] = [];
    item: DataItem;
    displayedColumns: string[] = ['name', 'details'];
    dataSource: any;

    constructor(
        private readonly _drawerService: StateService,
        private readonly _breakpointObserver: BreakpointObserver
    ) {}

    ngOnInit(): void {
        for (let i = 1; i <= 10; i++) {
            this.data.push(this.createRandomItem());
        }
        this.updateTable();

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

    createItem(index: number): DataItem {
        return { id: index, name: `Item ${index}`, details: `Item ${index} details` };
    }

    createRandomItem(): DataItem {
        const int: number = parseInt(`${Math.random() * 100}`, 10);
        return this.createItem(int);
    }

    updateTable(): void {
        this.dataSource = JSON.parse(JSON.stringify(this.data));
    }

    toggleMenu(): void {
        const drawerOpen = this._drawerService.getDrawerOpen();
        this._drawerService.setDrawerOpen(!drawerOpen);
    }
}
