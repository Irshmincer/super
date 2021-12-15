import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { salesCount, salesCounts } from './overview.model';

@Injectable({
  providedIn: 'root'
})
export class OverviewService {
  baseUrl = environment.baseUrl

  constructor(private http:HttpClient) { }

  Salescount(name:any): Observable<salesCounts> {
    return this.http.post<salesCounts>(`${this.baseUrl}superdash_app/api/v1/shopify/orders/ordersCount`, name );
  }
  
}
