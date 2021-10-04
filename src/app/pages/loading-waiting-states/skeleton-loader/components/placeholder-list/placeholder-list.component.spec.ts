import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderListComponent } from './placeholder-list.component';

describe('PlaceholderListComponent', () => {
    let component: PlaceholderListComponent;
    let fixture: ComponentFixture<PlaceholderListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PlaceholderListComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PlaceholderListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
