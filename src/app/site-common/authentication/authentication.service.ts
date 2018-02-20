import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {UserSessionService} from "../session/user-session.service";
import {Oauth2HttpUtilService} from "../oauth2-http/oauth2-http-util.service";
import {LoginResponse} from "./login/login-response";


import {environment} from "../../../environments/environment";
import {LogoutResponse} from "./logout/logout-response";

@Injectable()
export class AuthenticationService {

  constructor(private session:UserSessionService,
                private oauth2HttpUtil:Oauth2HttpUtilService,
                private http:HttpClient) { }


  authenticate(username: string, password: string, successCallBack: () => any, failCallBack: (e) => any): void {
    console.log("AuthenticationService.authenticate() - username: " + username + " password: " + password);
    let authenticationRequest = {
                                  "username":username,
                                  "password":password
                                };

    console.log("request: " + JSON.stringify(authenticationRequest));

    let loginUri = environment.webServiceProtocol + "://" +
                      environment.authenticationServiceHost + ":" +
                      environment.authenticationServicePort +
                    "/api/authenticate";
    console.log("AuthenticationService.authenticate() - loginUri: " + loginUri);

    this.http.post<LoginResponse>(loginUri, authenticationRequest).subscribe(
      response => this.authenticationSuccessCallBack(response, successCallBack),
      e => this.authenticationFailCallBack(e, failCallBack)
    );

  }

  authenticationSuccessCallBack(response: LoginResponse, successCallBack: () => any): void {
    console.log("AuthenticationService.authenticationSuccessCallBack() - token: " + JSON.stringify(response));
    let tokenStr = response.token;

    this.session.storeAuthenticationTokenForLogin(tokenStr);

    if(successCallBack) {
      successCallBack();
    }
  }

  authenticationFailCallBack(e, failCallBack: (e) => any):void {
    console.error("AuthenticationService.authenticationFailCallBack() - error: " + JSON.stringify(e));

    if(failCallBack) {
      failCallBack(e);
    }
  }

  logout(successCallBack: () => any, failCallBack: (e) => any): void {
    console.log("AuthenticationService.logout() starts.");

    let token = this.session.getAuthenticationToken();
    console.log("AuthenticationService.logout() - token: " + token);

    let logoutUri = environment.webServiceProtocol + "://" +
                      environment.authenticationServiceHost + ":" +
                      environment.authenticationServicePort +
                      "/api/logout/" + token;
    console.log("AuthenticationService.logout() - logoutUri: " + logoutUri);

    this.http.delete<LogoutResponse>(logoutUri).subscribe(
      response => this.logoutSuccessCallBack(response, successCallBack),
      error => this.logoutFailCallBack(error, failCallBack)
    );

  }

  logoutSuccessCallBack(response: LogoutResponse, successCallBack: () => any): void {
    console.log("AuthenticationService.logoutSuccessCallBack() - token: " + response['revokedToken'] + " has been revoked.");

    if(successCallBack) {
      successCallBack();
    }
  }

  logoutFailCallBack(e, failCallBack: (e) => any): void {
    console.error("AuthenticationService.logoutFailCallBack() - error: " + JSON.stringify(e));

    if(failCallBack) {
      failCallBack(e);
    }
  }

}
