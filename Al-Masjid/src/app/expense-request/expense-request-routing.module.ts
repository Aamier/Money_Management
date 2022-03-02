import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestGridComponent } from './request-grid/request-grid.component';

const routes: Routes = [
  {
    path: '', component: RequestGridComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenseRequestRoutingModule { }
