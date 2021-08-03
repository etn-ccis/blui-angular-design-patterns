import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixLengthPasscodeComponent } from './fix-length-passcode.component';
import { FixLengthPasscodeModule } from './fix-length-passcode.module';
import { By } from '@angular/platform-browser';

describe('FixLengthPasscodeComponent', () => {
    let component: FixLengthPasscodeComponent;
    let fixture: ComponentFixture<FixLengthPasscodeComponent>;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            imports: [FixLengthPasscodeModule],
        }).compileComponents();
    }));

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FixLengthPasscodeComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FixLengthPasscodeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should allow exact 6 digits valid passcode', () => {
        component.passcodeForm.controls.passcode.setValue('992830');
        void expect(component.passcodeForm.controls.passcode.valid).toBeTruthy();
    });

    it('should check passcode length on blur', () => {
        const inputEl = fixture.debugElement.query(By.css('input')) as any;
        inputEl.nativeElement.value = '5555';
        const validatePasscodeLengthSpy = spyOn(component, 'validatePasscodeLength').and.stub();
        inputEl.nativeElement.dispatchEvent(new Event('blur'));
        void expect(validatePasscodeLengthSpy).toHaveBeenCalled();
    });

    it('should display error on blur when passcode length is not 6 digits', () => {
        let errors = {};
        const passcode = component.passcodeForm.controls.passcode;
        errors = passcode.errors || {};
        expect(errors['required']).toBeTruthy();
        passcode.setValue('1234');
        const inputEl = fixture.debugElement.query(By.css('input')) as any;
        inputEl.nativeElement.dispatchEvent(new Event('blur'));
        fixture.detectChanges();
        errors = passcode.errors || {};
        expect(errors['required']).toBeFalsy();
        expect(errors['passcodeLengthNotMatch']).toBeTruthy();
    });

    it('should disable passcode input field after entering 6 digits', () => {
        component.passcodeForm.controls.passcode.setValue('123456');
        const inputEl = fixture.debugElement.query(By.css('input')) as any;
        inputEl.nativeElement.dispatchEvent(new Event('keyup'));
        fixture.detectChanges();
        void expect(component.passcodeForm.controls.passcode.disabled).toBeTruthy();
    });
});
