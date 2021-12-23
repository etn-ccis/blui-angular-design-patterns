import { FeedbackBottomSheetExample, FeedbackDialogExample, MatFeedackComponent } from './feedback.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule, MatSnackBarRef } from '@angular/material/snack-bar';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatBottomSheetModule, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
describe('MatFeedackComponent', () => {
    let component: MatFeedackComponent;
    let fixture: ComponentFixture<MatFeedackComponent>;
    const mockBottomSheetRef = {
        open: jasmine.createSpy('open'),
        dismiss: jasmine.createSpy('dismiss'),
    };

    const mockDialogRef = {
        open: jasmine.createSpy('open'),
    };

    const mockSnackbarRef = {
        open: jasmine.createSpy('open'),
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MatFeedackComponent, FeedbackDialogExample, FeedbackBottomSheetExample],
            imports: [
                MatDialogModule,
                MatBottomSheetModule,
                BrowserAnimationsModule,
                MatSnackBarModule,
                BrowserDynamicTestingModule,
            ],
            providers: [
                {
                    provide: MatDialogRef,
                    useValue: mockDialogRef,
                },
                {
                    provide: MatBottomSheetRef,
                    useValue: mockBottomSheetRef,
                },
                {
                    provide: MatSnackBarRef,
                    useValue: mockSnackbarRef,
                },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MatFeedackComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        void expect(component).toBeTruthy();
    });

    it('should show bottom sheet on button press', () => {
        const bottomSheetBtn = document.getElementsByClassName('bottom-sheet-button')[0];
        const mouseEvent = new MouseEvent('click');
        bottomSheetBtn.dispatchEvent(mouseEvent);
        fixture.detectChanges();
        const bottomSheet = document.getElementsByTagName('mat-bottom-sheet-container');
        void expect(bottomSheet).toBeTruthy();
    });

    it('should show dialog on button press', () => {
        const dialogBtn = document.getElementsByClassName('dialog-button')[0];
        const mouseEvent = new MouseEvent('click');
        dialogBtn.dispatchEvent(mouseEvent);
        fixture.detectChanges();
        const dialogContainer = document.getElementsByTagName('mat-dialog-container');
        void expect(dialogContainer).toBeTruthy();
    });

    it('should show snackbar on button press', () => {
        const snackBarBtn = document.getElementsByClassName('snackbar-button')[0];
        const mouseEvent = new MouseEvent('click');
        snackBarBtn.dispatchEvent(mouseEvent);
        fixture.detectChanges();
        const snackBarContainer = document.getElementsByTagName('snack-bar-container');
        void expect(snackBarContainer).toBeTruthy();
    });
});
