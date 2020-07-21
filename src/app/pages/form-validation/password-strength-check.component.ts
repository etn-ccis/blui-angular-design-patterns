import { Component, Input } from '@angular/core';
import * as Colors from '@pxblue/colors';

@Component({
    selector: 'app-password-strength-check',
    template: `
        <mat-list-item style="height: auto;">
            <mat-icon [style.color]="success ? Colors.blue[500] : Colors.gray[100]">{{ icon }}</mat-icon>
            <span style="padding-left: 8px;">{{ validationMessage }}</span>
        </mat-list-item>
    `,
})
export class PasswordStrengthCheckComponent {
    @Input() icon = 'done';
    @Input() validationMessage: string;
    @Input() success = false;
    Colors = Colors;

    constructor() {}
}
