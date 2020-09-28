import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MultiselectListComponent } from './multiselect-list.component';
import { MultiselectListModule } from './multiselect-list.module';

describe('MultiselectListComponent', () => {
    let component: MultiselectListComponent;
    let fixture: ComponentFixture<MultiselectListComponent>;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            imports: [MultiselectListModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MultiselectListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        void expect(component).toBeTruthy();
    });

    it('deselect all the selected items', async(() => {
        component.cancelItems();
        void expect(component.selectedItems).toEqual([]);
        void expect(component.enableFooter).toBeFalsy();
    }));

    it('remove all the selected items', async(() => {
        for (let i = 0; i < component.data.length; i++) {
            component.onSelected(component.data[i]);
        }
        component.deleteItems();
        void expect(component.data).toEqual([]);
        void expect(component.enableFooter).toBeFalsy();
    }));
});
