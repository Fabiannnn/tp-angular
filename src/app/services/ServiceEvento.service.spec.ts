/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServiceEventoService } from './ServiceEvento.service';

describe('Service: ServiceEvento', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceEventoService]
    });
  });

  it('should ...', inject([ServiceEventoService], (service: ServiceEventoService) => {
    expect(service).toBeTruthy();
  }));
});
