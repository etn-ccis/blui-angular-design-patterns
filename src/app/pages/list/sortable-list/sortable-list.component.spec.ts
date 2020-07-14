import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SortableListComponent } from './sortable-list.component';
import { SortableListModule } from './sortable-list.module';

describe('SortableListComponent', () => {
    let component: SortableListComponent;
    let fixture: ComponentFixture<SortableListComponent>;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            imports: [SortableListModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SortableListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        void expect(component).toBeTruthy();
    });
});
