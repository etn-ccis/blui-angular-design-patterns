import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneNumberFormatComponent } from './phone-number-format.component';
import { PhoneNumberFormatModule } from './phone-number-format.module';

describe('PhoneNumberFormatComponent', () => {
    let component: PhoneNumberFormatComponent;
    let fixture: ComponentFixture<PhoneNumberFormatComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PhoneNumberFormatModule],
            declarations: [PhoneNumberFormatComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PhoneNumberFormatComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
