import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { StateService } from '../../../services/state.service';

export type TreeItem = {
    title: string;
    selected?: boolean;
    opened?: boolean;
    children?: TreeItem[];
};

@Component({
    selector: 'app-tree',
    templateUrl: './tree.component.html',
    styleUrls: ['./tree.component.scss'],
})
export class TreeListComponent implements OnInit {
    treeItems: TreeItem[] = [
        {
            title: 'The Best Design Team',
            children: [
                {
                    title: 'Studio Blue',
                },
            ],
        },
        {
            title: 'The Best UX Team',
            children: [
                {
                    title: 'Design Thinking',
                },
                {
                    title: 'User Interface',
                    children: [
                        {
                            title: 'Design System',
                        },
                        {
                            title: 'Component Library',
                        },
                    ],
                },
            ],
        },
    ];

    isSmall: boolean;

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

    select(e: Event, item: TreeItem): void {
        e.stopPropagation();
        item.selected = !item.selected;
        console.log(item.selected);
    }

    toggleMenu(): void {
        const drawerOpen = this._drawerService.getDrawerOpen();
        this._drawerService.setDrawerOpen(!drawerOpen);
    }
}
