import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ApplicationInterceptorService } from './services/application-interceptor.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SharedModule } from './shared/shared.module';
import { ReceiptsModule } from './receipts/receipts.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


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
    TranslateModule.forRoot(
      {
        loader: {
          provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
      }
    )
  ],
  providers: [ConfirmationService, MessageService, {
    provide: HTTP_INTERCEPTORS, useClass: ApplicationInterceptorService, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
