import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoaderService } from './loader.service';
@Injectable({
  providedIn: 'root'
})
export class LoaderInterceptorService implements HttpInterceptor {
  private requests: HttpRequest<any>[] = [];
  constructor(private loaderService: LoaderService) { }

  removeRequest(req: HttpRequest<any>) {
    const i = this.requests.indexOf(req);
    if (i >= 0) {
        this.requests.splice(i, 1);
    }
    if (this.requests.length === 0) {
      this.hideLoader();
    }
}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req);
    this.requests.push(req);
    this.showLoader();
    return Observable.create(observer => {
        const subscription = next.handle(req)
            .subscribe(
                event => {
                    if (event instanceof HttpResponse) {
                        this.removeRequest(req);
                        observer.next(event);
                    }
                },
                err => {
                    this.removeRequest(req);
                    observer.error(err);
                },
                () => {
                    this.removeRequest(req);
                    observer.complete();
                });
        // remove request from queue when cancelled
        return () => {
            this.removeRequest(req);
            subscription.unsubscribe();
        };
    });
    // this.showLoader();
    // return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
    //   if (event instanceof HttpResponse) {
    //     this.onEnd();
    //   }
    // },
    //   (err: any) => {
    //     this.onEnd();
    // }));
  }

  private onEnd(): void {
    this.hideLoader();
  }
  private showLoader(): void {
    this.loaderService.show();
  }
  private hideLoader(): void {
    this.loaderService.hide();
  }
}
