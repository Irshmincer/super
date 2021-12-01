import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Login, UserData } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {



  constructor(private http: HttpClient, private router: Router) {}


  loadUserProfile(form: string ): Observable<Login> {
    return this.http.post<Login>(`http://localhost:3000/superdash_app/api/v1/login`, form);
  }

}
