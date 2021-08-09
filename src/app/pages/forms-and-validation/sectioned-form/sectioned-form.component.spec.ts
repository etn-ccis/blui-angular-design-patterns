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

    it('submitting a form emits errors if required fields are empty', () => {
        expect(component.factoryDetailsForm.valid).toBeFalsy();
        let errors = {};
        const factoryName = component.factoryDetailsForm.controls.factoryName;
        errors = factoryName.errors || {};
        expect(errors['required']).toBeTruthy();
        factoryName.setValue('ACME Steel Plant');
        component.submit();
        fixture.detectChanges();
        errors = factoryName.errors || {};
        expect(errors['required']).toBeFalsy();
      });
});
