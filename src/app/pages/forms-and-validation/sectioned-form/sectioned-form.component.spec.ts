import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionedFormComponent } from './sectioned-form.component';
import { SectionedFormModule } from './sectioned-form.module';

describe('SectionedFormComponent', () => {
    let component: SectionedFormComponent;
    let fixture: ComponentFixture<SectionedFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SectionedFormModule],
            declarations: [SectionedFormComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SectionedFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('form invalid when empty', () => {
        expect(component.factoryDetailsForm.valid).toBeFalsy();
    });
});
