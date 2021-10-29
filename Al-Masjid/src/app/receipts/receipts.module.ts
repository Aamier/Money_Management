import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceiptsRoutingModule } from './receipts-routing.module';
import { NewReceiptComponent } from './new-receipt/new-receipt.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ReceiptGridComponent } from './receipt-grid/receipt-grid.component';


@NgModule({
  declarations: [
    NewReceiptComponent,
    ReceiptGridComponent
  ],
  imports: [
    CommonModule,
    ReceiptsRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    NewReceiptComponent
  ]
})
export class ReceiptsModule { }
