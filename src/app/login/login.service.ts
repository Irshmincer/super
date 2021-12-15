import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Login, UserData } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  set user_profile(role: UserData) {
    localStorage.setItem('user_info', JSON.stringify(role));
  }

  get user_profile(): UserData {
   
    return JSON.parse(localStorage.getItem('user_info') || '{}');
  }


  constructor(private http: HttpClient, private router: Router) {}


  loadUserProfile(form: string ): Observable<Login> {
    return this.http.post<Login>(`http://localhost:3000/superdash_app/api/v1/login`, form);
  }

}
