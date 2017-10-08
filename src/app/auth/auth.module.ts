import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthComponent } from './auth.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AuthComponent,
    AuthLoginComponent
  ],
  exports: [
    AuthComponent
  ],
})
export class AuthModule { }
