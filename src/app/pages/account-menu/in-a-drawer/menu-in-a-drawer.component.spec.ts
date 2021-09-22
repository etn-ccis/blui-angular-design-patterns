import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuInADrawerComponent } from './menu-in-a-drawer.component';
import { MenuInDrawerModule } from './in-a-drawer.module';

describe('MenuInADrawerComponent', () => {
    let component: MenuInADrawerComponent;
    let fixture: ComponentFixture<MenuInADrawerComponent>;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            imports: [MenuInDrawerModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MenuInADrawerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        void expect(component).toBeTruthy();
    });
});
