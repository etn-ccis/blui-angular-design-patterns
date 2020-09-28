import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CollapsibleAppBarComponent } from './collapsible-app-bar.component';
import { CollapsibleAppBarModule } from './collapsible-app-bar.module';

describe('CollapsibleAppBarComponent', () => {
    let component: CollapsibleAppBarComponent;
    let fixture: ComponentFixture<CollapsibleAppBarComponent>;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            imports: [CollapsibleAppBarModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CollapsibleAppBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        void expect(component).toBeTruthy();
    });
});
