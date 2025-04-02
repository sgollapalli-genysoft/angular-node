import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class userApi {

  private apiUrl = 'http://localhost:5000/api/auth';  // The URL of your backend API

  constructor(private http: HttpClient) { }

  // Sign up method
  signUp(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, user);
  }

  // Login method
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }
}
