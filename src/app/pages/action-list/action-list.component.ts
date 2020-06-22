import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-action-list',
    templateUrl: './action-list.component.html',
    styleUrls: ['./action-list.component.scss'],
})
export class ActionListComponent implements OnInit {
    data: any[] = [];
    item: any = '';

    createItem(index: number) {
        return { id: index, name: `Item ${index}`, details: `item ${index} details` };
    }

    createRandomItem() {
        const int: number = parseInt(Math.random() * 100 + '', 10);
        return this.createItem(int);
    }

    ngOnInit(): void {
        for (let i = 1; i <= 10; i++) {
            this.data.push(this.createRandomItem());
        }
    }

    onOpenMenu(menu: any): void {}

    onSelected(item: any) {
        this.item = item;
    }

    isSelected(item: any) {
        return this.item === item;
    }

    onAddItem() {
        this.data.push(this.createRandomItem());
    }

    onRemoveItem(item: any) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    onRemoveAll() {
        this.data = [];
    }
}
