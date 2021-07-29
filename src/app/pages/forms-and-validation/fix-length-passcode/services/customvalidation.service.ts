import { Injectable } from '@angular/core';  
import { ValidatorFn, AbstractControl } from '@angular/forms';  
import { FormGroup } from '@angular/forms';  
  
@Injectable({  
  providedIn: 'root'  
})  
export class CustomvalidationService {  
  passcodeValidator(passcodeControl: AbstractControl) {  
    return new Promise(resolve => { 
        if (this.validatePasscodeLength(passcodeControl.value)) {  
          resolve({ passcodeLengthNotMatch: true });  
        } else {  
          resolve(null);  
        } 
    });  
  } 
  validatePasscode(passcodeControl: AbstractControl) {  
    return new Promise(resolve => { 
        if (passcodeControl.value?.length === 6) {  
          resolve({ invalidPasscode: true });  
        } else {  
          resolve(null);  
        }
        console.log(passcodeControl); 
    });  
  }  
  
  validatePasscodeLength(passcode: string) {  
    return passcode.length !== 6;
  }  
}  