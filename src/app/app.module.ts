import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {PublicSiteRoutingModule} from "./public-site-routing/public-site-routing.module";
import {AuthenticatedPortalRoutingModule} from "./authenticated-portal-routing/authenticated-portal-routing.module";
import {PublicSiteModule} from "./public-site/public-site.module";
import {AuthenticatedPortalModule} from "./authenticated-portal/authenticated-portal.module";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {Oauth2HttpRequestInterceptorService} from "./site-common/oauth2-http/oauth2-http-request-interceptor.service";

const publicRoutes: Routes = [
  {path:'', redirectTo:'/public/welcome', pathMatch:'full'},
  {path:'**', component:PageNotFoundComponent}
  ];


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    PublicSiteRoutingModule,
    AuthenticatedPortalRoutingModule,
    PublicSiteModule,
    AuthenticatedPortalModule,

    RouterModule.forRoot(publicRoutes)
  ],
  providers: [
    [{provide: HTTP_INTERCEPTORS,
      useClass:Oauth2HttpRequestInterceptorService,
      multi:true}]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
