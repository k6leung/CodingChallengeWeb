import { TestBed, inject } from '@angular/core/testing';

import { Oauth2HttpRequestInterceptorService } from './oauth2-http-request-interceptor.service';

describe('Oauth2HttpRequestInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Oauth2HttpRequestInterceptorService]
    });
  });

  it('should be created', inject([Oauth2HttpRequestInterceptorService], (service: Oauth2HttpRequestInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
