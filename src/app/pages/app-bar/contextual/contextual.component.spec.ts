import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContextualAppBarComponent } from './contextual.component';
import { ContextualAppbarModule } from './contextual.module';

describe('ContextualAppBarComponent', () => {
    let component: ContextualAppBarComponent;
    let fixture: ComponentFixture<ContextualAppBarComponent>;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            imports: [ContextualAppbarModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ContextualAppBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        void expect(component).toBeTruthy();
    });
});
