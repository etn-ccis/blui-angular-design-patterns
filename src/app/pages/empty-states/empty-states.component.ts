import { Component } from '@angular/core';

@Component({
    selector: 'app-empty-states',
    templateUrl: './empty-states.component.html',
    styleUrls: ['./empty-states.component.scss'],
})
export class EmptyStatesComponent {
    tabs = [
        { path: '/empty-states/action', label: 'ACTION' },
        { path: '/empty-states/text-only', label: 'TEXT ONLY' },
        { path: '/empty-states/placeholder', label: 'PLACEHOLDER' },
        { path: '/empty-states/sub-content', label: 'SUB-CONTENT' },
    ];
}
