import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyOnSubmitComponent } from './verify-on-submit.component';
import { VerifyOnSubmitModule } from './verify-on-submit.module';

import { By } from '@angular/platform-browser';

describe('VerifyOnSubmitComponent', () => {
    let component: VerifyOnSubmitComponent;
    let fixture: ComponentFixture<VerifyOnSubmitComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [VerifyOnSubmitModule],
        }).compileComponents();
    });

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [VerifyOnSubmitComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(VerifyOnSubmitComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should disable find device button if text field is empty', () => {
        component.searchDeviceForm.controls.serialNumber.setValue('');
        const findDeviceButton = fixture.debugElement.query(By.css('button')) as any;
        void expect(findDeviceButton.nativeElement.disabled).toBeTruthy();
    });

    it('should enable find device button if text field is not empty', () => {
        component.searchDeviceForm.controls.serialNumber.setValue('123-456');
        fixture.detectChanges();
        const findDeviceButton = fixture.debugElement.query(By.css('button')) as any;
        void expect(findDeviceButton.nativeElement.disabled).toBeFalsy();
    });

    it('should search device on button click', (done) => {
        component.searchDeviceForm.controls.serialNumber.setValue('123-456');
        fixture.detectChanges();

        const searchDeviceSpy = spyOn(component, 'searchDevice').and.stub();
        const button = fixture.nativeElement.querySelector('.search-device-btn');
        button.click();
        fixture.detectChanges();
        void fixture.whenStable().then(() => {
            void expect(searchDeviceSpy).toHaveBeenCalled();
            done();
        });
    });

    it('should display spinner on search device button click', () => {
        component.searchDeviceForm.controls.serialNumber.setValue('123-456');
        fixture.detectChanges();
        const button = fixture.nativeElement.querySelector('.search-device-btn');
        const buttonClass = fixture.debugElement.query(By.css('button'));
        button.click();
        fixture.detectChanges();
        void expect(buttonClass.classes['show-spinner']).toBeTruthy();
    });

    it('should replace spinner with text after timeout', (done) => {
        component.searchDeviceForm.controls.serialNumber.setValue('123-456');
        fixture.detectChanges();
        const button = fixture.nativeElement.querySelector('.search-device-btn');
        const buttonClass = fixture.debugElement.query(By.css('button'));
        button.click();
        fixture.detectChanges();
        void fixture.whenStable().then(() => {
            void expect(buttonClass.classes['show-text']).toBeTruthy();
            done();
        });
    });
});
