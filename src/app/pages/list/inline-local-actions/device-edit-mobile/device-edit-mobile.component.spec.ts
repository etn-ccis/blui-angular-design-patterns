import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceEditMobileComponent } from './device-edit-mobile.component';

describe('DeviceEditMobileComponent', () => {
    let component: DeviceEditMobileComponent;
    let fixture: ComponentFixture<DeviceEditMobileComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DeviceEditMobileComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DeviceEditMobileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
