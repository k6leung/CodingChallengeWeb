import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { AuthenticatedPortalHeaderComponent } from './authenticated-portal-header/authenticated-portal-header.component';
import { AuthenticatedPortalPageComponent } from './authenticated-portal-page/authenticated-portal-page.component';
import {ReportEnquiryModule} from "./report-enquiry/report-enquiry.module";
import {AuthenticationModule} from "../site-common/authentication/authentication.module";
import {AuthenticationService} from "../site-common/authentication/authentication.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AuthenticationModule
  ],
  exports: [AuthenticatedPortalPageComponent,
            ReportEnquiryModule,
            AuthenticatedPortalHeaderComponent],
  declarations: [AuthenticatedPortalHeaderComponent,
                  AuthenticatedPortalPageComponent],
  providers: [AuthenticationService]
})
export class AuthenticatedPortalModule { }
