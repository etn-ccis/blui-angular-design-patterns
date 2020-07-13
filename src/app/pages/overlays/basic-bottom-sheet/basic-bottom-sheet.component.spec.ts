import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BasicBottomSheetComponent } from './basic-bottom-sheet.component';
import { BasicBottomSheetModule } from './basic-bottom-sheet.module';

describe('BasicBottomSheetComponent', () => {
    let component: BasicBottomSheetComponent;
    let fixture: ComponentFixture<BasicBottomSheetComponent>;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            imports: [BasicBottomSheetModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BasicBottomSheetComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        void expect(component).toBeTruthy();
    });
});
