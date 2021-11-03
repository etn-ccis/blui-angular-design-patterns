import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TreeListComponent } from './tree.component';
import { TreeListModule } from './tree.module';

describe('TreeListComponent', () => {
    let component: TreeListComponent;
    let fixture: ComponentFixture<TreeListComponent>;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            imports: [TreeListModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TreeListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        void expect(component).toBeTruthy();
    });
});
