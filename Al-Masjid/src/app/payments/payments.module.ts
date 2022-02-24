import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { NewPaymentComponent } from './new-payment/new-payment.component';
import { PaymentGridComponent } from './payment-grid/payment-grid.component';


@NgModule({
  declarations: [
    NewPaymentComponent,
    PaymentGridComponent
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule
  ]
})
export class PaymentsModule { }
