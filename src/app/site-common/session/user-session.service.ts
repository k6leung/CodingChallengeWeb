import { Injectable } from '@angular/core';

@Injectable()
export class UserSessionService {

  readonly userTokenSessionKey = 'userTokenSessionKey';

  constructor() { }

  setAttribute(key:string, value:any ):void {
    console.log("UserSessionService.setAttribute() - key: " + key + " value: " + JSON.stringify(value));
    sessionStorage.setItem(key, value);
  }

  getAttribute(key:string):string {
    console.log("UserSessionService.getAttribute() - key: " + key);
    return sessionStorage.getItem(key);
  }

  remove(key:string):void {
    console.log("UserSessionService.remove() - key: " + key);
    sessionStorage.removeItem(key);
  }

  storeAuthenticationTokenForLogin(token:string):void {
    console.log("UserSessionService.storeAuthenticationTokenForLogin() - token: " + token);
    this.setAttribute(this.userTokenSessionKey, token);
  }

  getAuthenticationToken():string{
    console.log("UserSessionService.getAuthenticationToken() starts.");

    let result:any = this.getAttribute(this.userTokenSessionKey);
    console.log("UserSessionService.getAuthenticationToken() - result: " + JSON.stringify(result));

    return result;
  }

  isUserLoggedIn():boolean {
    console.log("UserSessionService.isUserLoggedIn() starts.");

    let result:boolean = (this.getAuthenticationToken() != null);
    console.log("UserSessionService.isUserLoggedIn() - result: " + result);

    return result;
  }

  removeAuthenticationTokenForLogout():void {
    console.log("UserSessionService.removeAuthenticationTokenForLogout() starts.")
    this.remove(this.userTokenSessionKey);
  }

}
