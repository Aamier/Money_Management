import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookletGridComponent } from './booklet-grid/booklet-grid.component';
import { HomeComponent } from './home/home.component';
import { NewBookletComponent } from './new-booklet/new-booklet.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: 'manage', component: BookletGridComponent },
      { path: 'test', component: NewBookletComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookletRoutingModule { }
