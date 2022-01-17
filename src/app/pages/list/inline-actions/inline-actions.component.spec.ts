import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineActionsComponent } from './inline-actions.component';

describe('InlineActionsComponent', () => {
    let component: InlineActionsComponent;
    let fixture: ComponentFixture<InlineActionsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [InlineActionsComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(InlineActionsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
