import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

import {UserSessionService} from "../session/user-session.service";

@Injectable()
export class Oauth2HttpUtilService {

  readonly bearerHeaderPrefix = "Bearer ";

  constructor(private session:UserSessionService) { }

  prepareOauth2BearerToken():string {
    console.log("Oauth2HttpUtilService.prepareOauth2AuthorizationHeaderOptions() starts.");
    let result = null;

    if(this.session.isUserLoggedIn()) {
      console.log("Oauth2HttpUtilService.prepareOauth2AuthorizationHeaderOptions() - user is logged in.");

      let token:string = this.session.getAuthenticationToken();
      console.log("Oauth2HttpUtilService.prepareOauth2AuthorizationHeaderOptions() - token: " + token);

      let bearerTokenValue:string = this.bearerHeaderPrefix + token;
      console.log("Oauth2HttpUtilService.prepareOauth2AuthorizationHeaderOptions() - bearerTokenValue: " + bearerTokenValue);

      result = bearerTokenValue;
    } else {
      console.log("Oauth2HttpUtilService.prepareOauth2AuthorizationHeaderOptions() - user is is not logged in, return null.");
    }
    return result;
  }
}
