import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { DataSource } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import * as Colors from '@pxblue/colors';
import { StateService } from '../../../services/state.service';

type Device = {
    name: string;
    ip: string;
};

@Component({
    selector: 'app-contextual-bar',
    templateUrl: './contextual.component.html',
    styleUrls: ['./contextual.component.scss'],
})
export class ContextualAppBarComponent implements OnInit {
    Colors = Colors;

    isSmall: boolean;
    allSelected = false;

    displayedColumns = ['checkbox', 'name', 'ip'];
    matDataSource: DataSource<Device>;
    selectedItems: Set<string> = new Set();

    devices: Device[];

    constructor(
        private readonly _drawerService: StateService,
        private readonly _breakpointObserver: BreakpointObserver
    ) {}

    ngOnInit(): void {
        this.resetTable();
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

    resetTable(): void {
        this.devices = [
            {
                name: 'Device 01',
                ip: '192.168.0.1',
            },
            {
                name: 'Device 02',
                ip: '192.168.0.1',
            },
            {
                name: 'Device 03',
                ip: '192.168.0.1',
            },
            {
                name: 'Device 04',
                ip: '192.168.0.1',
            },
        ];
        this.matDataSource = new MatTableDataSource(this.devices);
    }

    toggleMenu(): void {
        const drawerOpen = this._drawerService.getDrawerOpen();
        this._drawerService.setDrawerOpen(!drawerOpen);
    }

    selectAll(): void {
        this.allSelected = true;
        for (const device of this.devices) {
            this.selectedItems.add(device.name);
        }
    }

    clearSelection(): void {
        this.allSelected = false;
        this.selectedItems.clear();
    }

    selectItem(name: string): void {
        this.selectedItems.add(name);
        this.allSelected = this.selectedItems.size === this.devices.length;
    }

    removeItem(name: string): void {
        this.selectedItems.delete(name);
        this.allSelected = false;
    }

    toggleAllSelected(): void {
        if (this.allSelected) {
            this.clearSelection();
        } else {
            this.selectAll();
        }
    }

    deleteSelected(): void {
        const remaining: Device[] = [];
        for (const device of this.devices) {
            if (!this.selectedItems.has(device.name)) {
                remaining.push(device);
            }
        }
        this.devices = remaining;
        this.matDataSource = new MatTableDataSource(this.devices);
        this.selectedItems.clear();
        this.allSelected = false;
    }
}
