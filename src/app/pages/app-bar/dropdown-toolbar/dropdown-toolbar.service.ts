import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class DropdownToolbarStateService {
    selected: string;

    getSelected(): string {
        return this.selected;
    }

    setSelected(selected: string): void {
        this.selected = selected;
    }
}
