import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextualSpinnersComponent } from './contextual-spinners.component';

describe('ContextualSpinnersComponent', () => {
    let component: ContextualSpinnersComponent;
    let fixture: ComponentFixture<ContextualSpinnersComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ContextualSpinnersComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ContextualSpinnersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
