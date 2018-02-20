import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AuthenticatedPortalModule} from "../authenticated-portal/authenticated-portal.module";
import {AuthenticatedPortalPageComponent} from "../authenticated-portal/authenticated-portal-page/authenticated-portal-page.component";
import {ReportEnquiryModule} from "../authenticated-portal/report-enquiry/report-enquiry.module";
import {ReportEnquiryPageComponent} from "../authenticated-portal/report-enquiry/report-enquiry-page/report-enquiry-page.component";
import {RequireAuthRouteGuard} from "../site-common/security/require-auth-route-guard";

const routes:Routes = [
  {
    path: 'auth',
    component:AuthenticatedPortalPageComponent,
    canActivate:[RequireAuthRouteGuard],
    children:[
      {path:'report',
       component:ReportEnquiryPageComponent,
       canActivateChild:[RequireAuthRouteGuard]},
      {path:'',
        component:ReportEnquiryPageComponent,
        canActivateChild:[RequireAuthRouteGuard]}
    ]}
];

@NgModule({
  imports: [
    CommonModule,
    AuthenticatedPortalModule,
    ReportEnquiryModule,

    RouterModule.forChild(routes)
  ],
  declarations: [],
  providers:[RequireAuthRouteGuard]
})
export class AuthenticatedPortalRoutingModule { }
