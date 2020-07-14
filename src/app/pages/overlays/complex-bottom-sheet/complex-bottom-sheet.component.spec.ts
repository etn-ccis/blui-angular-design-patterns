import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { ComplexBottomSheetComponent } from './complex-bottom-sheet.component';
import { ComplexBottomSheetModule } from './complex-bottom-sheet.module';
import { DataService } from './data.service';
import { FiltersList } from './filter';

describe('ComplexBottomSheetComponent', () => {
    let component: ComplexBottomSheetComponent;
    let fixture: ComponentFixture<ComplexBottomSheetComponent>;
    let service;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            imports: [ComplexBottomSheetModule],
            providers: [DataService]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ComplexBottomSheetComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    beforeEach(inject([DataService], (s) => {
        service = s;
    }));

    it('should create ComplexBottomSheetComponent', () => {
        void expect(component).toBeTruthy();
    });

    it('should create the service', async(() => {
        void expect(service).toBeTruthy();
    }));

    it('updateSort works', () => {
        service.updateSort(FiltersList.EVENT_TYPE);
        void expect(service.activeSort).toBe(FiltersList.EVENT_TYPE);
    });

    it('updateFilters works', () => {
        service.updateFilters([FiltersList.ACTIVE_ALARMS]);
        void expect(service.activeFilters).toEqual([FiltersList.ACTIVE_ALARMS]);
        service.updateFilters([FiltersList.ACTIVE_ALARMS, FiltersList.ALARMS]);
        void expect(service.activeFilters).toEqual([FiltersList.ACTIVE_ALARMS, FiltersList.ALARMS]);
        service.updateFilters([]);
        void expect(service.activeFilters).toEqual([]);
      });
    
      it('sort works', () => {
        const sampleData = [
          {date: 1, type: 'C'},
          {date: 3, type: 'B'},
          {date: 2, type: 'A'}
        ];
        const sampleDataByTime = [
          {date: 3, type: 'B'},
          {date: 2, type: 'A'},
          {date: 1, type: 'C'}
        ];
        const sampleDataByType = [
          {date: 2, type: 'A'},
          {date: 3, type: 'B'},
          {date: 1, type: 'C'}
        ];
        service.updateSort(FiltersList.TIME);
        void expect(service.sortAlarms(sampleData)).toEqual(sampleDataByTime);
        service.updateSort(FiltersList.EVENT_TYPE);
        void expect(service.sortAlarms(sampleData)).toEqual(sampleDataByType);
      })
    
      it('filter works', () => {
        const sampleData = [
          {date: 1, type: 'C'},
          {date: 3, type: 'B'},
          {date: 2, type: 'A'}
        ];
        service.updateFilters('A');
        void expect(service.filterAlarms(sampleData)).toEqual([{date: 2, type: 'A'}]);
        service.updateFilters(['B','C']);
        void expect(service.filterAlarms(sampleData)).toEqual([{date: 1, type: 'C'},
        {date: 3, type: 'B'}]);
      })
});
