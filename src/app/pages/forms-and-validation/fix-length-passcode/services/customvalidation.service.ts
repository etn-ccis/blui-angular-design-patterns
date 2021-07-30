import { Injectable } from '@angular/core';
import { ValidationErrors, AbstractControl } from '@angular/forms';
export const randomFailure = () => Math.random() < 0.25;
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
    validatePasscode(passcodeControl: AbstractControl): ValidationErrors {
        return new Promise((resolve) => {
            if (passcodeControl.value?.length === 6) {
                resolve({ invalidPasscode: true });
            } else {
                resolve(null);
            }
            // randomFailure
            // console.log('passcodecontrol', passcodeControl);
            // if (randomFailure()) {
            //     resolve({ invalidPasscode: true });
            // } else {
            //     resolve(null);
            // }
        });
    }

    validatePasscodeLength(passcode: string): boolean {
        return passcode.length !== 6;
    }
}
