import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ILogin } from '../Models/loginModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(values: ILogin): Observable<any> {
    return this.http.post<any>(environment.baseUrl + 'auth/create', values)
  }
}
