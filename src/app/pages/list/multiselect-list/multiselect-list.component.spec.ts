import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MultiselectListComponent} from "./multiselect-list.component";
import {MultiselectListModule} from "./multiselect-list.module";

describe('MultiSelectListComponent', () => {
  let component: MultiselectListComponent;
  let fixture: ComponentFixture<MultiselectListComponent>;

  beforeEach((() => {
    void TestBed.configureTestingModule({
      imports: [MultiselectListModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiselectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    void expect(component).toBeTruthy();
  });
});
