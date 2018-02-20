import { Component, OnInit } from '@angular/core';
import {ReportEnquiryService} from "../report-enquiry.service";
import {SiteReport} from "../site-reports/site-report";

@Component({
  selector: 'app-report-enquiry-page',
  templateUrl: './report-enquiry-page.component.html',
  styleUrls: ['./report-enquiry-page.component.css']
})
export class ReportEnquiryPageComponent implements OnInit {

  selectedDate: string;

  dates:string[];

  reports: SiteReport[];

  constructor(private reportEnquiryService: ReportEnquiryService) { }

  ngOnInit() {
    this.selectedDate = "";
    this.reports = [];

    this.reportEnquiryService.getAllDates(this.getAllDatesSuccessCallBack.bind(this),
                                            this.getAllDatesFailCallBack);
  }

  getAllDatesSuccessCallBack(datesResponse: string[]) {
    console.log("ReportEnquiryPageComponent.getAllDatesSuccessCallBack() - datesResponse: " + JSON.stringify(datesResponse));

    this.dates = datesResponse;
  }

  getAllDatesFailCallBack(error: any) {
    console.error("ReportEnquiryPageComponent.getAllDatesFailCallBack() - error: " + JSON.stringify(error));

    if(error.hasOwnProperty("errorMessage")) {
      alert(error['errorMessage']);
    } else {
      alert("Report date loading failed, please try again later.");
    }
  }

  getReportByDates() {
    if((this.selectedDate) && !(/^\s*$/.test(this.selectedDate))) {
      this.reportEnquiryService.getReportsByDate(this.selectedDate,
                                                  this.getReportByDatesSuccessCallBack.bind(this),
                                                  this.getReportByDatesFailCallBack);
    }
  }

  getReportByDatesSuccessCallBack(response: SiteReport[]) {
    console.log("ReportEnquiryPageComponent.getReportByDatesSuccessCallBack() - response: " + JSON.stringify(response));

    this.reports = response;
  }

  getReportByDatesFailCallBack(error: any) {
    console.error("ReportEnquiryPageComponent.getReportByDatesFailCallBack() - error: " + JSON.stringify(error));

    if(error.hasOwnProperty("errorMessage")) {
      alert(error['errorMessage']);
    } else {
      alert("Report loading failed, please try again later.");
    }
  }

}
