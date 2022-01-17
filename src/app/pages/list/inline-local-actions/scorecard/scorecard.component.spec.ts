import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorecardComponent } from './scorecard.component';

describe('ScorecardComponent', () => {
    let component: ScorecardComponent;
    let fixture: ComponentFixture<ScorecardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ScorecardComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ScorecardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
