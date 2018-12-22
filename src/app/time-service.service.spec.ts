import { TestBed, inject } from '@angular/core/testing';

import { TimeServiceService } from './time-service.service';

describe('TimeServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimeServiceService]
    });
  });

  it('should be created', inject([TimeServiceService], (service: TimeServiceService) => {
    expect(service).toBeTruthy();
  }));
});
