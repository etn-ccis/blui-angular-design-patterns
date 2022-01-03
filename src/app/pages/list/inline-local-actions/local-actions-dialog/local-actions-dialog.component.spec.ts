import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalActionsDialogComponent } from './local-actions-dialog.component';

describe('LocalActionsDialogComponent', () => {
    let component: LocalActionsDialogComponent;
    let fixture: ComponentFixture<LocalActionsDialogComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LocalActionsDialogComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LocalActionsDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
