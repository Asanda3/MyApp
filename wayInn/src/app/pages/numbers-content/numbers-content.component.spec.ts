import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersContentComponent } from './numbers-content.component';

describe('NumbersContentComponent', () => {
  let component: NumbersContentComponent;
  let fixture: ComponentFixture<NumbersContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumbersContentComponent]
    });
    fixture = TestBed.createComponent(NumbersContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
