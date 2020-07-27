import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormValidationComponent } from './form-validation.component';
import { FormValidationModule } from './form-validation.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppModule } from '../../../app/app.module';

describe('FormValidationComponent', () => {
    let component: FormValidationComponent;
    let fixture: ComponentFixture<FormValidationComponent>;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            imports: [
                FormValidationModule,
                MatCardModule,
                MatIconModule,
                MatInputModule,
                MatListModule,
                MatToolbarModule,
                AppModule,
                FormsModule,
                ReactiveFormsModule,
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FormValidationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        void expect(component).toBeTruthy();
    });

    it('should allow field with a valid email address', () => {
        component.userForm.controls.email.setValue('admin@123.com');
        void expect(component.userForm.controls.email.valid).toBeTruthy();
        component.userForm.controls.email.setValue('admin@123');
        void expect(component.userForm.controls.email.valid).toBeFalsy();
    });

    it('should allow field with a valid phone number', () => {
        component.userForm.controls.phoneNumber.setValue('1234567898');
        void expect(component.userForm.controls.phoneNumber.valid).toBeTruthy();
        component.userForm.controls.phoneNumber.setValue('+1(919)9870998');
        void expect(component.userForm.controls.phoneNumber.valid).toBeTruthy();
        component.userForm.controls.phoneNumber.setValue('+1(919)9870998');
        void expect(component.userForm.controls.phoneNumber.valid).toBeTruthy();
        component.userForm.controls.phoneNumber.setValue('+19199870998');
        void expect(component.userForm.controls.phoneNumber.valid).toBeTruthy();
    });

    it('should not allow field with a invalid phone number', () => {
        component.userForm.controls.phoneNumber.setValue('1-800-CALL-HOME');
        void expect(component.userForm.controls.phoneNumber.valid).toBeFalsy();
        component.userForm.controls.phoneNumber.setValue('123456789');
        void expect(component.userForm.controls.phoneNumber.valid).toBeFalsy();
    });

    it('should allow field with a valid input', () => {
        component.userForm.controls.inputFC.setValue('qwerty12');
        void expect(component.userForm.controls.inputFC.valid).toBeTruthy();
    });

    it('should allow field with a valid old password', () => {
        component.userPassword.controls.oldPassword.setValue('qwert12');
        void expect(component.userPassword.controls.oldPassword.valid).toBeTruthy();
    });

    it('should allow field with a valid new password', () => {
        component.passwordFormGroup.controls.newPassword.setValue('qwert12');
        void expect(component.passwordFormGroup.controls.newPassword.valid).toBeFalsy();
        component.passwordFormGroup.controls.newPassword.setValue('Qwert12');
        void expect(component.passwordFormGroup.controls.newPassword.valid).toBeFalsy();
        component.passwordFormGroup.controls.newPassword.setValue('12@Qwert');
        void expect(component.passwordFormGroup.controls.newPassword.valid).toBeTruthy();
    });

    it('should allow field with a valid confirm password', () => {
        component.passwordFormGroup.controls.newPassword.setValue('qwert12');
        component.passwordFormGroup.controls.confirmPassword.setValue('qwert12');
        void expect(component.passwordFormGroup.controls.newPassword.value).toEqual(
            component.passwordFormGroup.controls.confirmPassword.value
        );
    });
});
