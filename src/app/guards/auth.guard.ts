import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const toaster = inject(ToastrService);

  return authService.currentUser$.pipe(
    map((user) => {
      if (user) return true;
      else {
        toaster.error('Unauthorized access');
        return false;
      }
    })
  );
};
