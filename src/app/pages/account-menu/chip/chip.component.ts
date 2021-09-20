import { Component, EventEmitter, Input, SimpleChanges, OnInit, Output } from '@angular/core';

@Component({
    selector: 'pxb-chip',
    templateUrl: './chip.component.html',
    styleUrls: ['./chip.component.scss'],
})
export class ChipComponent implements OnInit {
    @Input() icon: string;
    @Input() label: string;
    @Input() selected = false;
    @Output()
    openUserMenu = new EventEmitter<boolean>();
    open: false;
    constructor() {}

    ngOnInit(): void {}

    ngOnChanges(simpleChanges: SimpleChanges): void {
        this.selected = simpleChanges.selected.currentValue;
    }

    toggleChip(): void {
        this.openUserMenu.emit(!this.open);
    }
}
