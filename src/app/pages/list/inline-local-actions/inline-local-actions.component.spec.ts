import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InlineLocalActionsComponent } from './inline-local-actions.component';
import { LocalActionsDialogComponent } from './local-actions-dialog/local-actions-dialog.component';
import { InlineLocalActionsModule } from './inline-local-actions.module';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

describe('InlineLocalActionsComponent', () => {
    let component: InlineLocalActionsComponent;
    let fixture: ComponentFixture<InlineLocalActionsComponent>;

    const mockDialogRef = {
        open: jasmine.createSpy('open'),
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [InlineLocalActionsComponent, LocalActionsDialogComponent],
            imports: [BrowserDynamicTestingModule, InlineLocalActionsModule, MatDialogModule],
            providers: [
                {
                    provide: MatDialogRef,
                    useValue: mockDialogRef,
                },
            ],
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
