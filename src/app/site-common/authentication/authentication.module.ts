import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SessionModule} from "../session/session.module";
import {UserSessionService} from "../session/user-session.service";
import {Oauth2HttpUtilService} from "../oauth2-http/oauth2-http-util.service";
import {Oauth2HttpModule} from "../oauth2-http/oauth2-http.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    SessionModule,
    Oauth2HttpModule,
    HttpClientModule
  ],
  exports: [],
  declarations: [],
  providers: [UserSessionService, Oauth2HttpUtilService]
})
export class AuthenticationModule { }
