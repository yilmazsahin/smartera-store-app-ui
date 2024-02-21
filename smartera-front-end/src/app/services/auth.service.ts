import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  apiUrl = 'http://localhost:9091/api';
  constructor(private http: HttpClient, private router: Router) {}

  login(
    email: string,
    password: string,
    authorizationLevel: string
  ): Observable<any> {
    const loginData = {
      email: email,
      password: password,
      authorizationLevel: authorizationLevel,
    };
    return this.http.post(`${this.apiUrl}/login`, loginData);
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }
}
