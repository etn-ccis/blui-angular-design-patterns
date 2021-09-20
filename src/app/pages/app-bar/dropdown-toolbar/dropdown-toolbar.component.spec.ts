import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DropdownToolbarComponent } from './dropdown-toolbar.component';
import { DropdownToolbarModule } from './dropdown-toolbar.module';

describe('DropdownToolbarComponent', () => {
    let component: DropdownToolbarComponent;
    let fixture: ComponentFixture<DropdownToolbarComponent>;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            imports: [DropdownToolbarModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DropdownToolbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        void expect(component).toBeTruthy();
    });
});
