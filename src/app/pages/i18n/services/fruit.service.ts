import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { english } from '../translations/english';

export type Fruit = {
    name: string;
    price: number;
};

@Injectable({
    providedIn: 'root',
})
export class FruitService {
    selectedFruits = new Set<string>();
    fruitSelectionObs = new Subject<number>();
    fruits: Fruit[] = [];

    constructor() {
        this._randomlyPriceItems();
    }

    private _randomlyPriceItems(): void {
        for (const fruit of Object.keys(english.FRUITS)) {
            this.fruits.push({ name: fruit, price: Math.round((Math.random() + Number.EPSILON) * 1000) / 100 });
        }
    }

    // Return false to stop event propagation
    toggleFruit(fruit: string): boolean {
        if (this.selectedFruits.has(fruit)) {
            this.selectedFruits.delete(fruit);
        } else {
            this.selectedFruits.add(fruit);
        }
        this.emitChange();
        return false;
    }

    cancelItems(): void {
        this.selectedFruits.clear();
        this.emitChange();
    }

    emitChange(): void {
        this.fruitSelectionObs.next(this.selectedFruits.size);
    }
}
