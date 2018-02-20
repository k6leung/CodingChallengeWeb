import { TestBed, inject } from '@angular/core/testing';

import { Oauth2HttpUtilService } from './oauth2-http-util.service';

describe('Oauth2HttpUtilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Oauth2HttpUtilService]
    });
  });

  it('should be created', inject([Oauth2HttpUtilService], (service: Oauth2HttpUtilService) => {
    expect(service).toBeTruthy();
  }));
});
