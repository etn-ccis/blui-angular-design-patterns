import { Component, Input } from '@angular/core';
import * as Colors from '@pxblue/colors';

@Component({
    selector: 'app-password-strength-check',
    template: `
        <mat-list-item style="height: auto;" class="app-password-strength-check">
            <mat-icon [style.color]="success ? Colors.blue[500] : Colors.gray[300]">{{ icon }}</mat-icon>
            <span [style.color]="success ? Colors.gray[300] : Colors.black[500]" class="password-criteria">{{
                validationMessage
            }}</span>
        </mat-list-item>
    `,
    styles: [
        `
            ::ng-deep .mat-list-base .app-password-strength-check.mat-list-item .mat-list-item-content {
                padding: 0;
            }
            .password-criteria {
                padding-left: 8px;
                font-size: 12px;
            }
        `,
    ],
})
export class PasswordStrengthCheckComponent {
    @Input() icon = 'done';
    @Input() validationMessage: string;
    @Input() success = false;
    Colors = Colors;

    constructor() {}
}
