import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceiptsRoutingModule } from './receipts-routing.module';
import { NewReceiptComponent } from './new-receipt/new-receipt.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    NewReceiptComponent
  ],
  imports: [
    CommonModule,
    ReceiptsRoutingModule,
    SharedModule
  ],
  exports: [
    NewReceiptComponent
  ]
})
export class ReceiptsModule { }
