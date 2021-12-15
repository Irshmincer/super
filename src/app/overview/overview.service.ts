import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { salesCount, salesCounts } from './overview.model';

@Injectable({
  providedIn: 'root'
})
export class OverviewService {

  constructor(private http:HttpClient) { }

  Salescount(name:any): Observable<salesCounts> {
    return this.http.post<salesCounts>(`http://localhost:3000/superdash_app/api/v1/shopify/orders/ordersCount`, name );
  }
  
}
