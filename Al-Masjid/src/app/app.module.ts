import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ApplicationInterceptorService } from './services/application-interceptor.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SharedModule } from './shared/shared.module';
import { ReceiptsModule } from './receipts/receipts.module';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    SharedModule,
    ReceiptsModule,
    ToastrModule.forRoot(),
  ],
  providers: [ConfirmationService, MessageService, {
    provide: HTTP_INTERCEPTORS, useClass: ApplicationInterceptorService, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
