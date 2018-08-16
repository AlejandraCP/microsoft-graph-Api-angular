import { TestBed, inject } from '@angular/core/testing';

import { AuthMicroService } from './auth-micro.service';

describe('AuthMicroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthMicroService]
    });
  });

  it('should be created', inject([AuthMicroService], (service: AuthMicroService) => {
    expect(service).toBeTruthy();
  }));
});
