import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CacheInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authReq = req.clone({
      setHeaders: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      }
    });
    return next.handle(authReq);
  }
}
