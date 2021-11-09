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

    stopProp(e: Event): void {
        e.stopPropagation();
    }

    selectItem(item: TreeItem): void {
        const selected = item.selected;
        this.deselectAll(this.treeItems);
        item.selected = !selected;
    }

  deselectAll(items: TreeItem[]): void {
        if (!items || items.length === 0) {
            return;
        }
        for (const item of items) {
            item.selected = false;
            this.deselectAll(item.children);
        }
    }

    toggleMenu(): void {
        const drawerOpen = this._drawerService.getDrawerOpen();
        this._drawerService.setDrawerOpen(!drawerOpen);
    }

    showOpenFolder(item: TreeItem): boolean {
        return item.opened && Boolean(item.children);
    }
}
