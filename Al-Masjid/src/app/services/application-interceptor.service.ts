import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApplicationInterceptorService implements HttpInterceptor{

  constructor(private authService: AuthService, private router: Router, private spinner: NgxSpinnerService,
    private messageService: MessageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    const token = this.authService.getAuthToken();
    if (token) {
      req = req.clone({
         setHeaders: {Authorization: `Bearer ${token}`}
      });
      
      return next.handle(req).pipe(
        catchError((err: HttpErrorResponse) => {
          console.log('error', err);
          this.spinner.hide();
            this.messageService.add({severity:'error', summary: 'Error', detail: err.message});
          return throwError(err.error);
        })
      )
   }
  }
}
