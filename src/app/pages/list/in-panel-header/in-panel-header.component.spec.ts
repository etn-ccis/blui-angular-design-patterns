import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InPanelHeaderComponent } from './in-panel-header.component';
import { InPanelHeaderModule } from './in-panel-header.module';

describe('InPanelHeaderComponent', () => {
    let component: InPanelHeaderComponent;
    let fixture: ComponentFixture<InPanelHeaderComponent>;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            imports: [InPanelHeaderModule],
            declarations: [InPanelHeaderComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InPanelHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        void expect(component).toBeTruthy();
    });
});
