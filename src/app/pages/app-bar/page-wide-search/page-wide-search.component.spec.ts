import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PageWideSearchComponent } from './page-wide-search.component';
import { PageWideSearchModule } from './page-wide-search.module';

describe('SearchBarComponent', () => {
    let component: PageWideSearchComponent;
    let fixture: ComponentFixture<PageWideSearchComponent>;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            imports: [PageWideSearchModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageWideSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        void expect(component).toBeTruthy();
    });
});
