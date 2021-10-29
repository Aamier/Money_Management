import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IReceipt } from '../Models/generalModel';
import { ApiService } from './api-service';

@Injectable({
  providedIn: 'root'
})
export class ReceiptsService {

  constructor(private apiService: ApiService, private http: HttpClient) { }

  addReceipts(body: IReceipt): Observable<any> {
    return this.http.post<any>(this.apiService.RECEIPTS, body);
  }

  getReceipts(): Observable<any> {
    return this.http.get<any>(this.apiService.RECEIPTS);
  }
}
