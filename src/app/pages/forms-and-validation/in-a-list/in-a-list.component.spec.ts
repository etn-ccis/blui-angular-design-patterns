import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InAListComponent } from './in-a-list.component';

describe('InAListComponent', () => {
    let component: InAListComponent;
    let fixture: ComponentFixture<InAListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [InAListComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(InAListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
