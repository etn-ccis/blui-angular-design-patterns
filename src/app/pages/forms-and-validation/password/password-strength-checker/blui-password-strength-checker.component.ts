import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

export type PasswordRequirement = {
    description: string;
    regex: RegExp;
    success?: boolean;
    icon?: string;
};

@Component({
    selector: 'blui-password-strength-checker',
    encapsulation: ViewEncapsulation.None,
    template: `
        <mat-list class="blui-password-strength-checker-content">
            <ng-container *ngFor="let requirement of requirements">
                <app-password-strength-check
                    [success]="requirement.success"
                    [icon]="requirement.icon || 'done'"
                    [validationMessage]="requirement.description"
                >
                </app-password-strength-check>
            </ng-container>
        </mat-list>
    `,
    styles: [
        `
            blui-password-strength-checker {
                display: flex;
            }
            mat-list-item.blui-password-strength-checker-content {
                height: auto;
            }
        `,
    ],
    host: {
        class: 'blui-password-strength-checker',
    },
})
export class BluiPasswordStrengthCheckerComponent {
    @Input() requirements: PasswordRequirement[] = [];
    @Input() formValue: string;
    @Input() meetsRequirements: boolean;
    @Output() meetsRequirementsChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    ngOnChanges(): void {
        let passwordMeetsRequirements = true;
        for (const requirement of this.requirements) {
            requirement.success = requirement.regex.test(this.formValue ? this.formValue : '');
            passwordMeetsRequirements = passwordMeetsRequirements && requirement.success;
        }
        setTimeout(() => {
            this.meetsRequirementsChange.emit(passwordMeetsRequirements);
        });
    }
}
