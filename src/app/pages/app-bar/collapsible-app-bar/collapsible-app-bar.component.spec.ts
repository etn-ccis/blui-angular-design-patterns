import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CollapsibleAppBarComponent } from './collapsible-app-bar.component';
import { CollapsibleAppBarModule } from './collapsible-app-bar.module';
import { InAListComponent } from '../../forms-and-validation/in-a-list/in-a-list.component';

describe('CollapsibleAppBarComponent', () => {
    let component: CollapsibleAppBarComponent;
    let fixture: ComponentFixture<CollapsibleAppBarComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [InAListComponent],
            imports: [CollapsibleAppBarModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CollapsibleAppBarComponent);
        component = fixture.componentInstance;
        component.scrollElement = undefined;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
