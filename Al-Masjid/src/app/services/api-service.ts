import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  LOGIN = environment.baseUrl + 'auth/create';
  ORGBYMASJID = environment.baseUrl + 'masjid?org=';
  USER = environment.baseUrl + 'user';
  PAYMODES = environment.baseUrl + 'paymentmode';
  RECEIPTS = environment.baseUrl + 'receipt';
  BOOKLET = environment.baseUrl + 'booklet'
}
