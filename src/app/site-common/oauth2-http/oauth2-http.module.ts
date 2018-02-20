import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {SessionModule} from "../session/session.module";
import {UserSessionService} from "../session/user-session.service";


@NgModule({
  imports: [
    CommonModule,
    SessionModule,
    HttpClientModule
  ],
  exports:[],
  declarations: [],
  providers: [UserSessionService]
})
export class Oauth2HttpModule { }
