import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {SiteReport} from "./site-reports/site-report";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ReportEnquiryService {

  constructor(private http:HttpClient) { }

  getAllDates(successCallBack: (response) => any, failCallBack: (e) => any):Observable<string[]> {
    console.log("ReportEnquiryService.getAllDates() starts.");

    let getAllDatesUri = environment.webServiceProtocol + "://" +
                          environment.reportServiceHost + ":" +
                          environment.reportServicePort +
                          "/api/dates";
    console.log("ReportEnquiryService.getAllDates() - getAllDatesUri: " + getAllDatesUri);

    let result = this.http.get<string[]>(getAllDatesUri);
    result.subscribe(
      response => this.getAllDatesSuccessCallBack(response, successCallBack),
      e => this.getAllDatesFailCallBack(e, failCallBack)
    );

    return result;
  }

  getAllDatesSuccessCallBack(response: any, successCallBack: (response) => any): void {
    console.log("ReportEnquiryService.getAllDatesSuccessCallBack() starts.");

    if(successCallBack) {
      successCallBack(response);
    }
  }

  getAllDatesFailCallBack(e, failCallBack: (e) => any): void {
    console.error("ReportEnquiryService.getAllDatesFailCallBack() - e: " + JSON.stringify(e));

    if(failCallBack) {
      failCallBack(e);
    }
  }

  getReportsByDate(dateStr: string,
                    successCallBack: (response) => any,
                    failCallBack: (e) => any): Observable<SiteReport[]> {
    console.log("ReportEnquiryService.getReportsByDate() - dateStr: " + dateStr);

    let getReportsUri = environment.webServiceProtocol + "://" +
                          environment.reportServiceHost + ":" +
                          environment.reportServicePort +
                          "/api/reportForDate/" + dateStr;
    console.log("ReportEnquiryService.getReportsByDate() - getReportsUri: " + getReportsUri);

    let result = this.http.get<SiteReport[]>(getReportsUri);
    result.subscribe(
      response => this.getReportByDateSuccessCallBack(response, successCallBack),
      error => this.getReportByDateFailCallBack(error, failCallBack)
    );

    return result;
  }

  getReportByDateSuccessCallBack(response:SiteReport[], successCallBack: (response) => any):void {
    console.log("ReportEnquiryService.getReportByDateSuccessCallBack() - response: " + JSON.stringify(response));

    if(successCallBack) {
      successCallBack(response);
    }
  }

  getReportByDateFailCallBack(e, failCallBack: (e) => any): void {
    console.error("ReportEnquiryService.getReportByDateFailCallBack() - error: " + JSON.stringify(e));

    if(failCallBack) {
      failCallBack(e);
    }
  }

}
