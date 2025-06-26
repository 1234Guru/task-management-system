import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../../shared/Services/auth/auth.service';

export const AuthGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (!auth.user()) {
    router.navigate(['/auth/login']);
    return false;
  }

  return true;
};
