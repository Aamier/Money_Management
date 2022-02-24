import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentGridComponent } from './payment-grid.component';

describe('PaymentGridComponent', () => {
  let component: PaymentGridComponent;
  let fixture: ComponentFixture<PaymentGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
