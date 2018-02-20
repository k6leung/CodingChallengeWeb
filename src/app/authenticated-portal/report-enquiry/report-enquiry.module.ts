import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportEnquiryPageComponent } from './report-enquiry-page/report-enquiry-page.component';
import {ReportEnquiryService} from "./report-enquiry.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ReportEnquiryPageComponent],
  declarations: [ReportEnquiryPageComponent],
  providers: [ReportEnquiryService]
})
export class ReportEnquiryModule { }
