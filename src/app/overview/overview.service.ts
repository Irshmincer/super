import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { amazon, NewCustomer, razorPayCount, salesCount, salesCounts, shipRocketCount, TotalSaleShopify, ValuesforRazorandShopfiy } from './overview.model';

@Injectable({
  providedIn: 'root'
})
export class OverviewService {
  baseUrl = environment.baseUrl

  constructor(private http:HttpClient) { }

  
  Salescount(name:any): Observable<salesCounts> {
    return this.http.post<salesCounts>(`${this.baseUrl}superdash_app/api/v1/shopify/orders/ordersCount`, name );
  }

  shipRocket(name:any): Observable<shipRocketCount> {
    return this.http.post<shipRocketCount>(`${this.baseUrl}superdash_app/api/v1/shiprocket/total`, name );
  }

  newcustomer(name:any): Observable<NewCustomer> {
    return this.http.post<NewCustomer>(`${this.baseUrl}superdash_app/api/v1/shopify/orders/newCustomer`, name );
  }

  razorPay(name:any): Observable<razorPayCount> {
    return this.http.post<razorPayCount>(`${this.baseUrl}superdash_app/api/v1/shopify/orders/razorpay`, name );
  }

  TotalSalesShopfiy(name:any): Observable<TotalSaleShopify> {
    return this.http.post<TotalSaleShopify>(`${this.baseUrl}superdash_app/api/v1/shopify/orders/totalsales`, name );
  }

  ValuesforRazorandShopfiy(name:any): Observable<ValuesforRazorandShopfiy> {
    return this.http.post<ValuesforRazorandShopfiy>(`${this.baseUrl}superdash_app/api/v1/shopify/orders/rezorpayandshiprocket`, name );
  }


  ValuesforAmazon(name:any): Observable<amazon> {
    return this.http.post<amazon>(`${this.baseUrl}superdash_app/api/v1/amazon`, name );
  }


  
  
}
