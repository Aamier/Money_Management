import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookletRoutingModule } from './booklet-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookletGridComponent } from './booklet-grid/booklet-grid.component';
import { NewBookletComponent } from './new-booklet/new-booklet.component';


@NgModule({
  declarations: [
    HomeComponent,
    BookletGridComponent,
    NewBookletComponent
  ],
  imports: [
    CommonModule,
    BookletRoutingModule,
    SharedModule
  ]
})
export class BookletModule { }
