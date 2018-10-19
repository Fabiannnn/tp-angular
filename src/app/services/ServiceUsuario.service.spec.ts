/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServiceUsuarioService } from './ServiceUsuario.service';

describe('Service: ServiceUsuario', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceUsuarioService]
    });
  });

  it('should ...', inject([ServiceUsuarioService], (service: ServiceUsuarioService) => {
    expect(service).toBeTruthy();
  }));
});
