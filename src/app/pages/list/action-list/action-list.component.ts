import { Component, OnInit } from '@angular/core';

export type ListItem = {
    id: number;
    name: string;
    details: string;
};

@Component({
    selector: 'app-action-list',
    templateUrl: './action-list.component.html',
    styleUrls: ['./action-list.component.scss'],
})
export class ActionListComponent implements OnInit {
    data: ListItem[] = [];
    item: ListItem;

    constructor() {}

    ngOnInit(): void {
        for (let i = 1; i <= 10; i++) {
            this.data.push(this.createRandomItem());
        }
    }

    createItem(index: number): ListItem {
        return { id: index, name: `Item ${index}`, details: `item ${index} details` };
    }

    createRandomItem(): ListItem {
        const int: number = parseInt(`${Math.random() * 100}`, 10);
        return this.createItem(int);
    }

    onSelected(item: ListItem): void {
        this.item = item;
    }

    isSelected(item: ListItem): boolean {
        return this.item === item;
    }

    onAddItem(): void {
        this.data.push(this.createRandomItem());
    }

    onRemoveItem(item: ListItem): void {
        this.data.splice(this.data.indexOf(item), 1);
    }

    onRemoveAll(): void {
        this.data = [];
    }
}
