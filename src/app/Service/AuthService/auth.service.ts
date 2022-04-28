import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const AUTH_API = 'http://localhost:62394/api/user/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  login(userName: string, password: string): Observable<any> {
    return this.http.post(AUTH_API, {
      userName: userName,
      password: password
    });
  }
}
