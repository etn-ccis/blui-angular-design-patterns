import { Injectable } from '@angular/core';
import { FiltersList } from './filter';
import { BehaviorSubject } from 'rxjs';

export type DataItem = {
    date?: number;
    type?: string | number;
    active?: boolean;
    location?: string;
    device?: string;
    details?: string;
};

@Injectable({
    providedIn: 'root',
})
export class DataService {
    fullData: DataItem[] = [];
    activeFilters = ['settings', 'activeAlarms', 'alarms', 'session'];
    activeSort = 'time';

    private readonly dataSource = new BehaviorSubject(this.fullData);
    list = this.dataSource.asObservable();

    public NOW = Date.now();
    public TYPES = ['alarms', 'settings', 'session'];
    public LOCATIONS = [
        'Dos Valley Field',
        'Jameson Field',
        'Parker Field West',
        'Parker Field East',
        'North Park Garden',
    ];
    public DEVICES = ['MX Power Pro', 'PXL DG1', 'Pentair Aurora'];
    public DETAILS = ['Over Voltage Fault', 'Over Current Fault', 'Under Voltage Fault', 'Under Current Fault'];

    constructor() {
        for (let i = 1; i <= 20; i++) {
            this.fullData.push(this.getRandomData());
        }
        this.sortAlarms(this.fullData);
    }

    getRandomData(): DataItem {
        const type = this.TYPES[Math.floor(Math.random() * this.TYPES.length)];
        switch (type) {
            case 'alarms':
                return {
                    date: Math.round(this.NOW - Math.random() * 1000000000),
                    type: type,
                    active: Math.random() < 0.3,
                    location: this.LOCATIONS[Math.floor(Math.random() * this.LOCATIONS.length)],
                    device: this.DEVICES[Math.floor(Math.random() * this.DEVICES.length)],
                    details: this.DETAILS[Math.floor(Math.random() * this.DETAILS.length)],
                };
            case 'settings':
                return {
                    date: Math.round(this.NOW - Math.random() * 1000000000),
                    type: type,
                    location: this.LOCATIONS[Math.floor(Math.random() * this.LOCATIONS.length)],
                    device: this.DEVICES[Math.floor(Math.random() * this.DEVICES.length)],
                    details: 'Settings changed',
                };
            case 'session':
            default:
                return {
                    date: Math.round(this.NOW - Math.random() * 1000000000),
                    type: type,
                    location: this.LOCATIONS[Math.floor(Math.random() * this.LOCATIONS.length)],
                    device: this.DEVICES[Math.floor(Math.random() * this.DEVICES.length)],
                    details: 'Run Session',
                };
        }
    }

    passData(): void {
        this.dataSource.next(this.sortAlarms(this.filterAlarms(this.fullData)));
    }

    updateSort(sortType: string): void {
        this.activeSort = sortType;
        this.passData();
    }

    updateFilters(filterList: string[]): void {
        this.activeFilters = filterList;
        this.passData();
    }

    sortAlarms(data: DataItem[]): DataItem[] {
        switch (this.activeSort) {
            case FiltersList.EVENT_TYPE:
                return data.sort(
                    (
                        a: { type: string | number; date: number; active: any },
                        b: { type: number; date: number; active: any }
                    ) => {
                        // primary sort by type
                        if (a.type < b.type) {
                            return -1;
                        } else if (a.type > b.type) {
                            return 1;
                        }

                        // secondary sort by alarm active and/or date
                        if (a.type !== 'alarms') {
                            return b.date - a.date;
                        }

                        if (a.active && !b.active) {
                            return -1;
                        } else if (b.active && !a.active) {
                            return 1;
                        }
                        return b.date - a.date;
                    }
                );
            case FiltersList.TIME:
                return data.sort((a: { date: number }, b: { date: number }) => b.date - a.date);
            default: return data;
        }
    }

    filterAlarms(data: DataItem[]): DataItem[] {
        return data.filter((item: { type: string; active: any }) => {
            if (item.type === 'alarms' && !item.active) {
                return this.activeFilters.indexOf('alarms') > -1 ? true : false;
            } else if (item.type === 'alarms' && item.active) {
                return this.activeFilters.indexOf('activeAlarms') > -1 ? true : false;
            }
            return this.activeFilters.indexOf(item.type) > -1;
        });
    }
}
