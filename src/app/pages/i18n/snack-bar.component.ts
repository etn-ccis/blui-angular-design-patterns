import { Component } from '@angular/core';
import { FruitService } from './services/fruit.service';
import { BidirectionalService } from './services/bidirectional.service';
import * as Colors from '@brightlayer-ui/colors';
@Component({
    selector: 'app-i18n-snack-bar',
    template: `
        <div fxLayout="row" [style.color]="colors.white[50]" class="snackbar-content">
            <p style="margin: 0; line-height: 40px">{{ selected }} {{ 'ITEMS' | translate }}</p>
            <blui-spacer></blui-spacer>
            <div class="icon">
                <button mat-icon-button matTooltip="Deselect all" (click)="clearSelection()">
                    <mat-icon>cancel</mat-icon>
                </button>
            </div>
        </div>
    `,
    styles: [
        `
            ::ng-deep .mat-snack-bar-container {
                padding: 10px 16px;
            }

            .snackbar-content {
                font-size: 0.875rem;
            }
        `,
    ],
})
export class SnackBarComponent {
    colors = Colors;
    selected = 1;

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
