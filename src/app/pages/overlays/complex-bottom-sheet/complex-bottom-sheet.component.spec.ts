import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ComplexBottomSheetComponent } from './complex-bottom-sheet.component';
import { ComplexBottomSheetModule } from './complex-bottom-sheet.module';

describe('ComplexBottomSheetComponent', () => {
    let component: ComplexBottomSheetComponent;
    let fixture: ComponentFixture<ComplexBottomSheetComponent>;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            imports: [ComplexBottomSheetModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ComplexBottomSheetComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        void expect(component).toBeTruthy();
    });
});
