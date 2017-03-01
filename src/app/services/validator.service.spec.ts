/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ValidatorService } from './validator.service';

describe('ValidatorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidatorService]
    });
  });

  it('should ...', inject([ValidatorService], (service: ValidatorService) => {
    expect(service).toBeTruthy();
  }));
});
