import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderScoreCardComponent } from './placeholder-score-card.component';

describe('PlaceholderScoreCardComponent', () => {
    let component: PlaceholderScoreCardComponent;
    let fixture: ComponentFixture<PlaceholderScoreCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PlaceholderScoreCardComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PlaceholderScoreCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
