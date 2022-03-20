import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBooklet, IReceipt } from '../Models/generalModel';
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

  addBooklet(body: IBooklet) {
    return this.http.post<any>(this.apiService.BOOKLET, body);
  }
}
