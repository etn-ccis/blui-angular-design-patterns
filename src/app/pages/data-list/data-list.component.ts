import { Component } from '@angular/core';

@Component({
    selector: 'app-data-list',
    templateUrl: './data-list.component.html',
    styleUrls: ['./data-list.component.scss'],
})
export class DataListComponent {
    list = {
        georgeWashington: 1789,
        johnAdams: 1796,
        thomasJefferson: 1800,
        jamesMadison: 1808,
        jamesMonroe: 1812,
    };

    constructor() {}
}
