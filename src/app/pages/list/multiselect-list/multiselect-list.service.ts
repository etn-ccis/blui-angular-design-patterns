import { Injectable } from '@angular/core';
import { ListItem } from './multiselect-list.component';

@Injectable({
    providedIn: 'root',
})
export class MultiselectListService {
    private readonly data: ListItem[] = [];
    private selectedItems = [];

    constructor() {
        for (let i = 1; i <= 10; i++) {
            this.data.push(this.createRandomItem());
        }
    }

    getItems(): ListItem[] {
        return this.data;
    }

    getSelectedItems(): ListItem[] {
        return this.selectedItems;
    }

    addNewItem(): void {
        this.data.push(this.createRandomItem());
    }

    unselectAll(): void {
        this.selectedItems = [];
    }

    deleteSelected(): void {
        this.selectedItems.forEach((item) => {
            const index = this.data.indexOf(item);
            this.data.splice(index, 1);
        });
        this.selectedItems = [];
    }

    selectItem(item: ListItem): void {
        if (this.selectedItems.indexOf(item) === -1) {
            this.selectedItems.push(item);
        } else {
            this.selectedItems.splice(this.selectedItems.indexOf(item), 1);
        }
    }

    isSelected(item: ListItem): boolean {
        return this.selectedItems.indexOf(item) !== -1;
    }

    createItem(index: number, randomStatus: string): ListItem {
        return { id: index, name: `Item ${index}`, details: `Status: ${randomStatus}`, status: randomStatus };
    }

    createRandomItem(): ListItem {
        const int = parseInt(`${Math.random() * 100}`, 10);
        const randomStatus = Math.random() >= 0.3 ? 'normal' : 'alarm';
        return this.createItem(int, randomStatus);
    }
}
