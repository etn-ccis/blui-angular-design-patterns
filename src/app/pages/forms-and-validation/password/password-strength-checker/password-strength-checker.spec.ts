import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { PasswordModule } from '../password.module';

import { PasswordStrengthCheckComponent } from './password-strength-checker.component';

describe('PasswordComponent', () => {
    let component: PasswordStrengthCheckComponent;
    let fixture: ComponentFixture<PasswordStrengthCheckComponent>;

    beforeEach(waitForAsync(() => {
        void TestBed.configureTestingModule({
            imports: [PasswordModule],
        }).compileComponents();
    }));

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PasswordStrengthCheckComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PasswordStrengthCheckComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
