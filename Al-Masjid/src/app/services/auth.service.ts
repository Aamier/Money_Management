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
  getAuthToken(): string | null {
    return sessionStorage.getItem('token');
  }

  login(values: ILogin): Observable<any> {
    return this.http.post<any>(environment.baseUrl + 'auth/create', values);
  }

  getUserById(userId: number): Observable<any> {
    return this.http.get<any>(environment.baseUrl + 'user/' + userId);
  }

  getMasjidByOrg(orgId: number): Observable<any> {
    return this.http.get<any>(environment.baseUrl + 'masjid?org=' + orgId);
  }

  userMe(): Observable<any> {
    return this.http.get<any>(environment.baseUrl + 'users/me');
  }
}
