import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceiptGridComponent } from './receipt-grid/receipt-grid.component';

const routes: Routes = [
  {
    path: '', component: ReceiptGridComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceiptsRoutingModule { }
