import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ResponsiveTableComponent } from './responsive-table.component';
import { ResponsiveTableModule } from './responsive-table.module';

describe('ResponsiveTableComponent', () => {
    let component: ResponsiveTableComponent;
    let fixture: ComponentFixture<ResponsiveTableComponent>;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            imports: [ResponsiveTableModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ResponsiveTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        void expect(component).toBeTruthy();
    });
});
