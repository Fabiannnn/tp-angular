/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServiceAgendaService } from './ServiceAgenda.service';

describe('Service: ServiceAgenda', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceAgendaService]
    });
  });

  it('should ...', inject([ServiceAgendaService], (service: ServiceAgendaService) => {
    expect(service).toBeTruthy();
  }));
});
