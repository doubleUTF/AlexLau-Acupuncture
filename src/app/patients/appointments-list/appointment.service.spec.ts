/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AppointmentService } from './appointments.service';

describe('AppointmentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppointmentsService]
    });
  });

  it('should ...', inject([AppointmentsService], (service: AppointmentsService) => {
    expect(service).toBeTruthy();
  }));
});
