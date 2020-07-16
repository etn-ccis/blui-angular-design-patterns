import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { english } from '../translations/english';

@Injectable({
    providedIn: 'root',
})
export class FruitService {
    selectedFruits = new Set<string>();
    fruits = Object.keys(english.FRUITS);
    fruitSelectionObs = new Subject<number>();

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
