import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerOverlaysComponent } from './spinner-overlays.component';

describe('SpinnerOverlaysComponent', () => {
  let component: SpinnerOverlaysComponent;
  let fixture: ComponentFixture<SpinnerOverlaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinnerOverlaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerOverlaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
