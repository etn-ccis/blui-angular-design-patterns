import { Component, Input } from '@angular/core';
import { TreeItem } from './tree.component';

@Component({
    selector: 'app-tree-item',
    template: `
        <mat-panel-title>
            <mat-radio-group>
                <mat-radio-button [checked]="item.selected"></mat-radio-button>
            </mat-radio-group>
            <mat-icon *ngIf="!item.opened">folder</mat-icon>
            <mat-icon *ngIf="item.opened">folder_opened</mat-icon>
            {{ item.title }}
        </mat-panel-title>
    `,
})
export class TreeItemComponent {
    @Input() item: TreeItem;
}
