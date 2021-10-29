import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin } from '../Models/loginModel';
import { ApiService } from './api-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private apiService: ApiService) { }
  getAuthToken(): string | null {
    return sessionStorage.getItem('token');
  }

  login(values: ILogin): Observable<any> {
    return this.http.post<any>(this.apiService.LOGIN, values);
  }
}
