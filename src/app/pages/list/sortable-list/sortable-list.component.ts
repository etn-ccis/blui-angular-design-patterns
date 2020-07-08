import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { StateService } from 'src/app/services/state.service';

export type ListItem = {
    name: string;
    details: string;
};

@Component({
    selector: 'app-sortable-list',
    templateUrl: './sortable-list.component.html',
    styleUrls: ['./sortable-list.component.scss'],
})
export class SortableListComponent implements OnInit {
    data = [
        {
            name: 'George Washington',
            details: '1789',
        },
        {
            name: 'John Adams',
            details: '1796',
        },
        { name: 'Thomas Jefferson', details: '1800' },
        { name: 'James Madison', details: '1808' },
        { name: 'James Monroe', details: '1812' },
    ];

    item: any = '';
    draggable = false;
    isSmall: boolean;

    displayedColumns: string[] = ['name', 'details'];
    dataSource: any;

    constructor(
        private readonly _drawerService: StateService,
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

    onDrop(event: CdkDragDrop<string[]>): void {
        moveItemInArray(this.data, event.previousIndex, event.currentIndex);
    }

    edit(): void {
        this.draggable = !this.draggable;
    }

    toggleMenu(): void {
        const drawerOpen = this._drawerService.getDrawerOpen();
        this._drawerService.setDrawerOpen(!drawerOpen);
    }
}
