import { HttpInterceptor, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { take } from 'rxjs';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);

  authService.currentUser$.pipe(take(1)).subscribe({
    next: (response) => {
      if (response) {
        req = req.clone({
          setHeaders: {
            Authorization: `Bearer ${response?.token}`,
          },
        });
      }
    },
  });
  return next(req);
};
