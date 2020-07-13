import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    data: any[] = [];
    public NOW = Date.now();
    public LOCATIONS = [
        'Dos Valley Field',
        'Jameson Field',
        'Parker Field West',
        'Parker Field East',
        'North Park Garden',
    ];
    public DEVICES = ['MX Power Pro', 'PXL DG1', 'Pentair Aurora'];
    public DETAILS = ['Over Voltage Fault', 'Over Current Fault', 'Under Voltage Fault', 'Under Current Fault'];

    getRandomData(): any {
        return {
            date: Math.round(this.NOW - Math.random() * 1000000000),
            active: Math.random() < 0.3,
            location: this.LOCATIONS[Math.floor(Math.random() * this.LOCATIONS.length)],
            device: this.DEVICES[Math.floor(Math.random() * this.DEVICES.length)],
            details: this.DETAILS[Math.floor(Math.random() * this.DETAILS.length)],
        };
    }

    constructor() {
        for (let i = 1; i <= 10; i++) {
            this.data.push(this.getRandomData());
        }
        this.data.sort((a, b) => b.date - a.date);
    }
}
