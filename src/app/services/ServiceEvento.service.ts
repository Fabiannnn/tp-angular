import { Injectable } from '@angular/core';
import { Evento } from '../angularDomain/Evento';
import { Point } from '../angularDomain/Point';
import { Locacion } from '../angularDomain/Locacion';

@Injectable({
  providedIn: 'root'
})
export class ServiceEventoService {
  /*
  get eventosOrganizadosPorElUsuario(): Array<Evento> {
    return [
      {
        fechaDeInicio: new Date(),
        nombre: "Hosen Fest",
        locacion: new Locacion("Lalolanda"),
        motivo: "Die Toten Hosen"
      },

      {
        fechaDeInicio: new Date(),
        nombre: "Aniversario P.E.",
        locacion:  new Locacion("25 de Mayo 1485"),
        motivo: "Timothy Drake"
      }

    ]
  }
  */
  constructor() { }

}
