import { HttpClient } from '@angular/common/http';
import { Injectable, inject, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { catchError, tap } from 'rxjs';
import { User } from '../../models/global.model';
import { environment } from '../../environments/environment.prod'; // Import environment

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);
  private tokenKey = 'job_token';
  private baseUrl = environment.apiUrl;

  user = signal<User | null>(null);

  constructor(private http: HttpClient) {
    if (this.isBrowser) {
      const token = localStorage.getItem(this.tokenKey);
      if (token) this.setUserFromToken(token);
    }
  }

  login(data: any) {
  return this.http
  .post<{ token: string }>(`${this.baseUrl}/auth/login`, data)
  .pipe(
    tap((res) => this.saveToken(res.token)),
    catchError((err) => {
      console.error('Caught in pipe:', err);
      throw err; // rethrow to pass to subscribe().error
    })
  );

  }

  register(data: any) {
    return this.http.post(`${this.baseUrl}/auth/register`, data);
  }

  logout() {
    if (this.isBrowser) {
      localStorage.removeItem(this.tokenKey);
    }
    this.user.set(null);
  }


  //save the token when we login to the app
  private saveToken(token: string) {
    if (this.isBrowser) {
      localStorage.setItem(this.tokenKey, token);
    }
    this.setUserFromToken(token);
  }

  private setUserFromToken(token: string) {
    const payload = jwtDecode<User>(token);
    if (payload) this.user.set(payload);
  }
}


//decode dwt 
function jwtDecode<T = any>(token: string): T | null {
  try {
    const payload = token.split('.')[1];
    const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
    const decoded = atob(base64);
    return JSON.parse(decoded) as T;
  } catch (e) {
    console.error('Failed to decode JWT:', e);
    return null;
  }
}
