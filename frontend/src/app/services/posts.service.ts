import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

@Injectable({ providedIn: 'root' })
export class PostsService {
  private api = 'http://localhost:3000/api/posts';
  constructor(private http: HttpClient) {}

  /** If q omitted→ fetch all */
  fetch(q?: string): Observable<Post[]> {
    const term = q?.trim();
    if (term) {
      const params = new HttpParams().set('q', term);
      return this.http.get<Post[]>(this.api, { params });
    } 
    return this.http.get<Post[]>(this.api);
  }
}
