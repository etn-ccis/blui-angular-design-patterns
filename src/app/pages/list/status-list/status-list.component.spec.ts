import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StatusListComponent } from './status-list.component';
import { StatusListModule } from './status-list.module';

describe('StatusListComponent', () => {
    let component: StatusListComponent;
    let fixture: ComponentFixture<StatusListComponent>;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            declarations: [StatusListComponent],
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
});
