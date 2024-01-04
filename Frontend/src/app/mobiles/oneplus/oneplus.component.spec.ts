import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneplusComponent } from './oneplus.component';

describe('OneplusComponent', () => {
  let component: OneplusComponent;
  let fixture: ComponentFixture<OneplusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneplusComponent]
    });
    fixture = TestBed.createComponent(OneplusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
