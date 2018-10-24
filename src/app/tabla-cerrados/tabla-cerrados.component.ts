import { Component, OnInit } from '@angular/core';
import { ServiceEventoService } from '../services/ServiceEvento.service'
import { EventoCerrado } from '../angularDomain/EventoCerrado';


@Component({
  selector: 'tabla-cerrados',
  templateUrl: './tabla-cerrados.component.html',
  styleUrls: ['./tabla-cerrados.component.css']
})
export class TablaCerradosComponent implements OnInit {
  title = 'MIS EVENTOS CERRADOS'
  misEventosCerrados: Array<EventoCerrado> = new Array<EventoCerrado>()

  constructor(private serviceEvento: ServiceEventoService) {

  }

  ngOnInit(): void {
    this.misEventosCerrados = this.serviceEvento.EVENTOS_CERRADO
  }
}

