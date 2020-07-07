import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActionListComponent } from './action-list.component';
import { ActionListModule } from './action-list.module';

describe('ActionListComponent', () => {
    let component: ActionListComponent;
    let fixture: ComponentFixture<ActionListComponent>;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            imports: [ActionListModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ActionListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        void expect(component).toBeTruthy();
    });

    it('should create an item when createItem is called', async(() => {
        void expect(component.createItem(1)).toEqual({ id: 1, name: 'Item 1', details: 'item 1 details' });
    }));

    it('should remove all items onRemoveAll', async(() => {
        component.onRemoveAll();
        void expect(component.data).toEqual([]);
    }));

    it('should add item onAddItem', async(() => {
        fixture.detectChanges();
        spyOn(component, 'createRandomItem').and.returnValue({ id: 2, name: 'Item 2', details: 'item 2 details' });
        component.data = [{ id: 1, name: 'Item 1', details: 'item 1 details' }];
        component.onAddItem();
        void expect(component.createRandomItem).toHaveBeenCalled();
        void expect(component.data).toEqual([
            { id: 1, name: 'Item 1', details: 'item 1 details' },
            { id: 2, name: 'Item 2', details: 'item 2 details' },
        ]);
    }));

    it('should remove item onRemoveItem', async(() => {
        fixture.detectChanges();
        const item1 = { id: 1, name: 'Item 1', details: 'item 1 details' };
        const item2 = { id: 2, name: 'Item 2', details: 'item 2 details' };
        const item3 = { id: 3, name: 'Item 3', details: 'item 3 details' };
        component.data = [item1, item2, item3];
        component.onRemoveItem(item2);
        void expect(component.data).toEqual([item1, item3]);
    }));
});
