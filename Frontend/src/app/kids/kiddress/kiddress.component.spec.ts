import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KiddressComponent } from './kiddress.component';

describe('KiddressComponent', () => {
  let component: KiddressComponent;
  let fixture: ComponentFixture<KiddressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KiddressComponent]
    });
    fixture = TestBed.createComponent(KiddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
