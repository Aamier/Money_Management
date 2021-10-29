import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptGridComponent } from './receipt-grid.component';

describe('ReceiptGridComponent', () => {
  let component: ReceiptGridComponent;
  let fixture: ComponentFixture<ReceiptGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiptGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
