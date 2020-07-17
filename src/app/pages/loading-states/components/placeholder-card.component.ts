import { Component } from '@angular/core';

@Component({
    selector: 'app-placeholder-card',
    template: `
        <div class="ph-item">
            <div class="ph-col-4" *ngFor="let hero of [0, 1, 2]" style="justify-content: center; max-width: 100px">
                <div class="ph-avatar" style="min-width: 0;"></div>
                <div class="ph-row">
                    <div class="ph-col-12 big"></div>
                </div>
            </div>
            <div class="ph-col-12">
                <div class="ph-row" *ngFor="let listitem of [0, 1, 2]">
                    <div class="ph-col-12 big"></div>
                </div>
            </div>
        </div>
    `,
    styles: [
        `
            .ph-item {
                padding: 16px 0;
                margin: 0;
                justify-content: space-around;
                height: 260px;
                border: none;
            }
        `,
    ],
})
export class PlaceholderCardComponent {}
