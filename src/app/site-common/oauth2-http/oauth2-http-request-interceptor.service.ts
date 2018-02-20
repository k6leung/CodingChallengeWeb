import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Oauth2HttpUtilService} from "./oauth2-http-util.service";


@Injectable()
export class Oauth2HttpRequestInterceptorService implements HttpInterceptor{

  constructor(private oauth2HttpUtil:Oauth2HttpUtilService) { }

  intercept(req: HttpRequest<any>,
            next: HttpHandler):Observable<HttpEvent<any>> {
    console.log("Oauth2HttpRequestInterceptorService.intercept() starts.");
    let newReq = null;

    let bearerToken = this.oauth2HttpUtil.prepareOauth2BearerToken();
    console.log("Oauth2HttpRequestInterceptorService.intercept() - bearerToken: " + bearerToken);

    if(bearerToken == null) {
      newReq = req;
    } else {
      newReq = req.clone({
        setHeaders:{
          Authorization:bearerToken
        }
      } );
    }

    return next.handle(newReq);
  }
}
