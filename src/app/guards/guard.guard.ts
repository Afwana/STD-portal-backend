import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const guardGuard: CanActivateFn = () => {
  const service = inject(AuthService)
  const router = inject(Router)
  if(service.isLoggedIn()){
    return true;
  }
  else{
    alert("Please Login...")
    router.navigateByUrl("")
    return false
  }
};
