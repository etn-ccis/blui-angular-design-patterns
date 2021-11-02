import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TreeComponent } from './tree.component';
import { TreeModule } from './tree.module';

describe('DataListComponent', () => {
    let component: TreeComponent;
    let fixture: ComponentFixture<TreeComponent>;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            imports: [TreeModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TreeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        void expect(component).toBeTruthy();
    });
});
