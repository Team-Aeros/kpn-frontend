import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountTypeDetailsComponent } from './discount-type-details.component';

describe('DiscountTypeDetailsComponent', () => {
  let component: DiscountTypeDetailsComponent;
  let fixture: ComponentFixture<DiscountTypeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscountTypeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountTypeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
