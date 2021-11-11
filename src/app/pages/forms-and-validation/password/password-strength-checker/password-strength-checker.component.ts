import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-password-strength-check',
    template: `
        <mat-list-item class="blui-auth-password-check">
            <mat-icon class="check-icon" [color]="success ? 'primary' : undefined">{{ icon }}</mat-icon>
            <span class="validation-message mat-subheading-1" [class.success]="success">
                {{ validationMessage }}
            </span>
        </mat-list-item>
    `,
    styleUrls: ['password-strength-checker.component.scss'],
})
export class PasswordStrengthCheckComponent {
    @Input() icon = 'done';
    @Input() validationMessage: string;
    @Input() success = false;
}
