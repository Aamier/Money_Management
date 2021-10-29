import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { catchError, retry, timeout } from 'rxjs/operators';
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

  private handleError(error: HttpErrorResponse) {
    // Todo: See this can be used for all Http actions
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      // console.error(
      //   `Backend returned code ${error.status}, body was: `, error.error);
        console.error(
          `Backend returned code ${error}, body was: `, error.error);
    }

    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
  login(values: ILogin): Observable<any> {
    // TODO: See why timeout and rety isn't working
    const reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'}) // Doesnt work even with headers
    return this.http.post<any>(environment.baseUrl + 'auth/create', values, {headers: reqHeader}).pipe(timeout(3000), retry(2),

    catchError(this.handleError))
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
