import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceplanDetailsComponent } from './priceplan-details.component';

describe('PriceplanDetailsComponent', () => {
  let component: PriceplanDetailsComponent;
  let fixture: ComponentFixture<PriceplanDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceplanDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceplanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
