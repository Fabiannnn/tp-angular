import { Component, OnInit } from '@angular/core';
import { ServiceEventoService } from '../services/ServiceEvento.service';
import { Evento } from '../angularDomain/Evento';
import { EventoCerrado } from '../angularDomain/EventoCerrado';


@Component({
  selector: 'tabla-cerrados',
  templateUrl: './tabla-cerrados.component.html',
  styleUrls: ['./tabla-cerrados.component.css']
})
export class TablaCerradosComponent implements OnInit {
  eventosCreadosPorMi: Array<EventoCerrado> = new Array<EventoCerrado>();

  title = 'EVENTOS DEL NEGRO'
  serviceEvento: ServiceEventoService

  constructor(serviceEvento: ServiceEventoService) {
    this.eventosCreadosPorMi = ServiceEventoService.EVENTOS
  }

  ngOnInit(): void {
    this.eventosCreadosPorMi = ServiceEventoService.EVENTOS
  }
}

