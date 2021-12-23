import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineButtonPanelComponent } from './inline-button-panel.component';

describe('InlineButtonPanelComponent', () => {
  let component: InlineButtonPanelComponent;
  let fixture: ComponentFixture<InlineButtonPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineButtonPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineButtonPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
