import { TestBed } from '@angular/core/testing';

import { TokenInterceptor } from './token.interceptor';

import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, of } from 'rxjs';


class MockHttpHandler implements HttpHandler {
  handle(req: HttpRequest<any>): Observable<HttpEvent<any>> {
    return of();
  }
}

describe('authInterceptor', () => {
  const interceptor = (req: HttpRequest<any>, next: HttpHandler) =>
    TestBed.runInInjectionContext(() => new TokenInterceptor().intercept(req, next));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    const req = new HttpRequest('GET', '/');
    const next = new MockHttpHandler();
    expect(interceptor(req, next)).toBeTruthy();
  });
});
