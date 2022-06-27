import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'app', component: HomeComponent,
    children: [
      {
        path: 'receipts', 
        loadChildren: () => import('./receipts/receipts.module').then(m => m.ReceiptsModule)
      },
      {
        path: 'expense-dashboard',
        loadChildren: () => import('./expense-request/expense-request.module').then(m => m.ExpenseRequestModule)
      },
      {
        path: 'booklet-dashboard',
        loadChildren: () => import('./booklet/booklet.module').then(m => m.BookletModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
