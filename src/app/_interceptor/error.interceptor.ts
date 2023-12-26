import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, catchError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  // const router: Router = inject(Router);
  // const toaster = inject(ToastrService);
  console.log({ req: 'Hello req' });

  return next(req);
};

export const loggingInterceptor = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  console.log({ url: req.url });
  return next(req);
};
