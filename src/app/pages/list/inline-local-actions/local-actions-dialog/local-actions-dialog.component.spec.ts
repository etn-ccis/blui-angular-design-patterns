import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocalActionsDialogComponent } from './local-actions-dialog.component';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

describe('LocalActionsDialogComponent', () => {
    let component: LocalActionsDialogComponent;
    let fixture: ComponentFixture<LocalActionsDialogComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LocalActionsDialogComponent],
            imports: [MatDialogModule],
            providers: [
                { provide: MAT_DIALOG_DATA, useValue: {} },
                { provide: MatDialogRef, useValue: {} },
            ],
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
