import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';

import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { PublicSiteHeaderComponent } from './public-site-header/public-site-header.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PublicSitePageComponent } from './public-site-page/public-site-page.component';
import {AuthenticationModule} from "../site-common/authentication/authentication.module";
import {AuthenticationService} from "../site-common/authentication/authentication.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AuthenticationModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [PublicSitePageComponent, PublicSiteHeaderComponent],
  declarations: [WelcomePageComponent,
                  PublicSiteHeaderComponent,
                  LoginPageComponent,
                  PublicSitePageComponent],
  providers: [AuthenticationService]
})
export class PublicSiteModule { }
