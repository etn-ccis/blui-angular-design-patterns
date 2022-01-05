import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { MatDialogModule } from '@angular/material/dialog';
import { LocalActionsDialogComponent } from './local-actions-dialog.component';

fdescribe('LocalActionsDialogComponent', () => {
    let component: LocalActionsDialogComponent;
    let fixture: ComponentFixture<LocalActionsDialogComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LocalActionsDialogComponent],
            // imports: [MatDialogModule],
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
