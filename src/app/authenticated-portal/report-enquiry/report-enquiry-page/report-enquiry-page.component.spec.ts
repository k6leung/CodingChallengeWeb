import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportEnquiryPageComponent } from './report-enquiry-page.component';

describe('ReportEnquiryPageComponent', () => {
  let component: ReportEnquiryPageComponent;
  let fixture: ComponentFixture<ReportEnquiryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportEnquiryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportEnquiryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
