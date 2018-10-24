import { Component, OnInit } from '@angular/core';
import { ServiceEventoService } from '../services/ServiceEvento.service';
import { Evento } from '../angularDomain/Evento';

@Component({
  selector: 'agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})

export class AgendaComponent implements OnInit {
  title = 'EVENTOS DE LA FECHA'
  EventosAgendaHoy: Array<Evento> = new Array<Evento>();
  EventosAgendaSemana: Array<Evento> = new Array<Evento>();
  EventosAgendaProximos: Array<Evento> = new Array<Evento>();

  constructor(private serviceEvento: ServiceEventoService) {

  }

  ngOnInit() {
    this.EventosAgendaHoy = this.serviceEvento.getAgendaHoy();
    this.EventosAgendaSemana = this.serviceEvento.getAgendaSemana();
    this.EventosAgendaProximos = this.serviceEvento.getAgendaProximos();
  }
}
