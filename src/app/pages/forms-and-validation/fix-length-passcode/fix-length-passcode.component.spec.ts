import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixLengthPasscodeComponent } from './fix-length-passcode.component';
import { FixLengthPasscodeModule } from './fix-length-passcode.module';

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
});
