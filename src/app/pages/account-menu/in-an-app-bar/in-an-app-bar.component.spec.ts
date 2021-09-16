import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InAnAppBarComponent } from './in-an-app-bar.component';

describe('InAnAppBarComponent', () => {
  let component: InAnAppBarComponent;
  let fixture: ComponentFixture<InAnAppBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InAnAppBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InAnAppBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
