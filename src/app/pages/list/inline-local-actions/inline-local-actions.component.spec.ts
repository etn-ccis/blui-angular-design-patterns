import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineLocalActionsComponent } from './inline-local-actions.component';

describe('InlineLocalActionsComponent', () => {
    let component: InlineLocalActionsComponent;
    let fixture: ComponentFixture<InlineLocalActionsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [InlineLocalActionsComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(InlineLocalActionsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
