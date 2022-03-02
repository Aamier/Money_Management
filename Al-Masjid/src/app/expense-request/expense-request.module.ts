import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpenseRequestRoutingModule } from './expense-request-routing.module';
import { RequestGridComponent } from './request-grid/request-grid.component';
import { RaiseTicketComponent } from './raise-ticket/raise-ticket.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    RequestGridComponent,
    RaiseTicketComponent
  ],
  imports: [
    CommonModule,
    ExpenseRequestRoutingModule,
    SharedModule
  ]
})
export class ExpenseRequestModule { }
