import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InATableComponent } from './in-a-table.component';

describe('InATableComponent', () => {
  let component: InATableComponent;
  let fixture: ComponentFixture<InATableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InATableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InATableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
