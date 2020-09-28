import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StatusListComponent } from './status-list.component';
import { StatusListModule } from './status-list.module';

describe('StatusListComponent', () => {
    let component: StatusListComponent;
    let fixture: ComponentFixture<StatusListComponent>;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            imports: [StatusListModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StatusListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        void expect(component).toBeTruthy();
    });

    it('if status is equal to alarm, setAlarm becomes true', async(() => {
        const status = 'alarm';
        void expect(component.setAlarm(status)).toBeTruthy();
    }));

    it('if status is not equal to alarm, setAlarm becomes false', async(() => {
        const status = 'other';
        void expect(component.setAlarm(status)).toBeFalsy();
    }));
});
