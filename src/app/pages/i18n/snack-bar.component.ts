import { Component } from '@angular/core';
import { FruitService } from './services/fruit.service';

@Component({
    selector: 'app-i18n-snack-bar',
    template: ` <div fxLayout="row">
        <p style="margin: 0; line-height: 40px">{{ selected }} {{ 'ITEMS' | translate }}</p>
        <pxb-spacer></pxb-spacer>
        <div class="icon">
            <button mat-icon-button (click)="clearSelection()">
                <mat-icon>cancel</mat-icon>
            </button>
            <button mat-icon-button>
                <mat-icon>more_vert</mat-icon>
            </button>
        </div>
    </div>`,
})
export class SnackBarComponent {
    selected: number = 1;

    constructor(private readonly _fruitService: FruitService) {
        this.listenForFruitSelectionChanges();
    }

    clearSelection(): void {
        this._fruitService.cancelItems();
    }

    listenForFruitSelectionChanges(): void {
        this._fruitService.fruitSelectionObs.subscribe((selected: number) => {
            this.selected = selected;
        });
    }
}
