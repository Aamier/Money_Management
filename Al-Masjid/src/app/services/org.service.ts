import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiService } from './api-service';

@Injectable({
  providedIn: 'root'
})
export class OrgService {

  constructor(private http: HttpClient, private apiService: ApiService) { }

  getMasjidByOrg(orgId: number): Observable<any> {
    return this.http.get<any>(this.apiService.ORGBYMASJID + orgId);
  }
}
