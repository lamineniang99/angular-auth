import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './helpers/auth.guard';
import { noReturnAuthGuard } from './helpers/no-return-auth.guard';

const routes: Routes = [
  {
    path : '' ,
    loadChildren : () => import('./features/features.module').then(m => m.FeaturesModule) ,
    canActivate : [authGuard]
  },
  {
    path : "auth",
    loadChildren : () => import('./auth/auth.module').then(m => m.AuthModule) ,
    canActivate : [noReturnAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
