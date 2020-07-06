import { Component } from '@angular/core';

@Component({
    selector: 'app-data-list',
    templateUrl: './data-list.component.html',
    styleUrls: ['./data-list.component.scss'],
})
export class DataListComponent {
    list = [
        {
            name: 'George Washington',
            year: 1789,
        },
        {
            name: 'John Adams',
            year: 1796,
        },
        {
            name: 'Thomas Jefferson',
            year: 1800,
        },
        {
            name: 'James Madison',
            year: 1808,
        },
        {
            name: 'James Monroe',
            year: 1812,
        },
    ];

    constructor() {}
}
