import { TestBed } from '@angular/core/testing';
import { MultiselectListService } from './multiselect-list.service';

describe('MultiselectListService', () => {
    let service: MultiselectListService;

    beforeEach(() => {
        void TestBed.configureTestingModule({});
        service = TestBed.inject(MultiselectListService);
    });

    it('should be created', () => {
        void expect(service).toBeTruthy();
    });

    it('should start with 10 items', () => {
        expect(service.getItems().length).toBe(10);
    });

    it('should select item', () => {
        service.selectItem({
            id: 1,
            name: 'sample',
            details: 'sample-details',
            status: 'active',
        });
        expect(service.getSelectedItems().length).toBe(1);
    });

    it('should remove all selected items', () => {
        service.selectItem(service.getItems()[0]);
        expect(service.getSelectedItems().length).toBe(1);
        service.deleteSelected();
        expect(service.getSelectedItems().length).toBe(0);
        expect(service.getItems().length).toBe(9);
    });

    it('should add a new item', () => {
        expect(service.getItems().length).toBe(10);
        service.addNewItem();
        expect(service.getItems().length).toBe(11);
    });

    it('should unselect all selected items', () => {
        service.selectItem({
            id: 1,
            name: 'sample',
            details: 'sample-details',
            status: 'active',
        });
        expect(service.getSelectedItems().length).toBe(1);
        service.unselectAll();
        expect(service.getSelectedItems().length).toBe(0);
    });
});
