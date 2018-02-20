import { TestBed, inject } from '@angular/core/testing';

import { ReportEnquiryService } from './report-enquiry.service';

describe('ReportEnquiryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReportEnquiryService]
    });
  });

  it('should be created', inject([ReportEnquiryService], (service: ReportEnquiryService) => {
    expect(service).toBeTruthy();
  }));
});
