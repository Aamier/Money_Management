import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiService } from './api-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private apiService: ApiService) { }

  getUserById(userId: number): Observable<any> {
    return this.http.get<any>(this.apiService.USER + '/' + userId);
  }

  userMe(): Observable<any> {
    return this.http.get<any>(this.apiService.USER + 's/me');
  }
}
