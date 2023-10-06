import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsCardComponent } from './tests-card.component';

describe('TestsCardComponent', () => {
  let component: TestsCardComponent;
  let fixture: ComponentFixture<TestsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestsCardComponent]
    });
    fixture = TestBed.createComponent(TestsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
