import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { SpinnerService } from '../services/spinner/spinner.service';
@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  constructor(public spinService: SpinnerService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinService.show();
    return next.handle(req).pipe(
      finalize(() => this.spinService.hide())
    );
  }
}
