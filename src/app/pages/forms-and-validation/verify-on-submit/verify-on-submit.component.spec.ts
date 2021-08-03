import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyOnSubmitComponent } from './verify-on-submit.component';

describe('VerifyOnSubmitComponent', () => {
    let component: VerifyOnSubmitComponent;
    let fixture: ComponentFixture<VerifyOnSubmitComponent>;

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
});
