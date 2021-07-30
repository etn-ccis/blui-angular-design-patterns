import { Injectable } from '@angular/core';
import { ValidationErrors, AbstractControl } from '@angular/forms';
@Injectable({
    providedIn: 'root',
})
export class CustomvalidationService {
    passcodeValidator(passcodeControl: AbstractControl): ValidationErrors {
        return new Promise((resolve) => {
            if (this.validatePasscodeLength(passcodeControl.value)) {
                resolve({ passcodeLengthNotMatch: true });
            } else {
                resolve(null);
            }
        });
    }

    validatePasscodeLength(passcode: string): boolean {
        return passcode.length !== 6;
    }
}
