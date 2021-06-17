import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderHeroComponent } from './placeholder-hero.component';

describe('PlaceholderHeroComponent', () => {
    let component: PlaceholderHeroComponent;
    let fixture: ComponentFixture<PlaceholderHeroComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PlaceholderHeroComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PlaceholderHeroComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
