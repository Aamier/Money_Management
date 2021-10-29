import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api-service';

@Injectable({
  providedIn: 'root'
})
export class PayModeService {

  constructor(private http: HttpClient, private apiService: ApiService) { }

  getPayModes(): Observable<any> {
    return this.http.get<any>(this.apiService.PAYMODES);
  }

}
