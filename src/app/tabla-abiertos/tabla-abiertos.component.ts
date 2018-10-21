import { Component, OnInit } from '@angular/core';
import { ServiceEventoService } from '../services/ServiceEvento.service';
import { EventoAbierto } from '../angularDomain/EventoAbierto';

@Component({
  selector: 'tabla-abiertos',
  templateUrl: './tabla-abiertos.component.html',
  styleUrls: ['./tabla-abiertos.component.css']
})
export class TablaAbiertosComponent implements OnInit {
  eventosAbiertosCreadosPorMi: Array<EventoAbierto> = new Array<EventoAbierto>();

  title = 'EVENTOS DEL NEGRO'
  serviceEvento: ServiceEventoService

  constructor(serviceEvento: ServiceEventoService) {
    this.eventosAbiertosCreadosPorMi = ServiceEventoService.EVENTOS_ABIERTOS
  }

  ngOnInit(): void {
    this.eventosAbiertosCreadosPorMi = ServiceEventoService.EVENTOS_ABIERTOS
  }
}
