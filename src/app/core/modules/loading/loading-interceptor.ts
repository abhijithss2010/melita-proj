import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { LoadingService } from './loading.service';
import { finalize } from 'rxjs/operators';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  private requestCount = 0;
  constructor(public loadingService: LoadingService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.requestCount++;
    this.loadingService.show();
    return next.handle(req).pipe(
      finalize(() => {
        this.requestCount--;
        if (this.requestCount === 0) {
          this.loadingService.hide();
        }
      })
    );
  }
}

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
