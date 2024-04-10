import { Inject, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth/Services/auth.service';




export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)

  if (!authService.isAuthentificated()) {
      router.navigateByUrl('auth')
      return false
  }
  return true;
};
