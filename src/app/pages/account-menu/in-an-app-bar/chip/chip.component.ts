import { Component, EventEmitter, Input, SimpleChanges, Output } from '@angular/core';

@Component({
    selector: 'blui-chip',
    templateUrl: './chip.component.html',
    styleUrls: ['./chip.component.scss'],
})
export class ChipComponent {
    @Input() icon: string;
    @Input() label: string;
    @Input() selected = false;
    @Output()
    openUserMenu = new EventEmitter<boolean>();
    open = false;
    constructor() {}

    ngOnChanges(simpleChanges: SimpleChanges): void {
        this.selected = simpleChanges.selected.currentValue;
    }

    toggleChip(): void {
        this.openUserMenu.emit(!this.open);
    }
}
