import { Component, OnInit } from '@angular/core';
import { ServiceEventoService } from '../services/ServiceEvento.service';
import { EventoAbierto } from '../angularDomain/EventoAbierto';

@Component({
  selector: 'tabla-abiertos',
  templateUrl: './tabla-abiertos.component.html',
  styleUrls: ['./tabla-abiertos.component.css']
})
export class TablaAbiertosComponent implements OnInit {
  title = 'MIS EVENTOS ABIERTOS'
  misEventosAbiertos: Array<EventoAbierto> = new Array<EventoAbierto>()

  constructor(private serviceEvento: ServiceEventoService) {

  }

  ngOnInit(): void {
    this.misEventosAbiertos = this.serviceEvento.EVENTOS_ABIERTO
  }
}
