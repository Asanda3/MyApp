import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondNumberGameComponent } from './second-number-game.component';

describe('SecondNumberGameComponent', () => {
  let component: SecondNumberGameComponent;
  let fixture: ComponentFixture<SecondNumberGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondNumberGameComponent]
    });
    fixture = TestBed.createComponent(SecondNumberGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
