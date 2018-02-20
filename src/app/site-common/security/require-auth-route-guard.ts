import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild} from '@angular/router';
import {UserSessionService} from "../session/user-session.service";

@Injectable()
export class RequireAuthRouteGuard implements CanActivate, CanActivateChild {

  constructor(private userSessionService:UserSessionService,
                private router:Router) {}

  checkLogin(url: string): boolean {
    console.log("RequireAuthRouteGuard.checkLogin() - url: " + url);

    let result:boolean = false;

    if(this.userSessionService.isUserLoggedIn()){
      console.log("RequireAuthRouteGuard.checkLogin() - user is logged in.");
      result = true;
    } else {
      console.log("RequireAuthRouteGuard.checkLogin() - user is NOT logged in.");
      this.router.navigate(["/public/login"]);
    }

    return result;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }
}
