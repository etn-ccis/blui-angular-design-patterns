import { Component } from '@angular/core';
import { FruitService } from './services/fruit.service';
import { BidirectionalService } from './services/bidirectional.service';

@Component({
    selector: 'app-i18n-snack-bar',
    template: ` <div fxLayout="row">
        <p style="margin: 0; line-height: 40px">{{ selected }} {{ 'ITEMS' | translate }}</p>
        <pxb-spacer></pxb-spacer>
        <div class="icon">
            <button mat-icon-button (click)="clearSelection()">
                <mat-icon>cancel</mat-icon>
            </button>
        </div>
    </div>`,
})
export class SnackBarComponent {
    selected: number = 1;

    constructor(
        private readonly _fruitService: FruitService,
        private readonly _bidirectionService: BidirectionalService
    ) {
        this.listenForFruitSelectionChanges();
        this._bidirectionService.changeDirectionality(this._bidirectionService.getCurrentLanguage());
    }

    listenForFruitSelectionChanges(): void {
        this._fruitService.fruitSelectionObs.subscribe((selected: number) => {
            this.selected = selected;
        });
    }

    clearSelection(): void {
      this._fruitService.cancelItems();
    }
}
