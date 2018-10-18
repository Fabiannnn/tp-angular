import { Component, OnInit } from '@angular/core';
import { toDate } from '@angular/common/src/i18n/format_date';
import { ServiceAgendaService} from '../services/ServiceAgenda.service';

@Component({
  selector: 'agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})

export class AgendaComponent implements OnInit {

  dia
  semana
  proximos
  constructor(private serviceAgenda: ServiceAgendaService){
    this.dia = this.serviceAgenda.agendaHoy
    this.semana = this.serviceAgenda.agendaSemana
    this.proximos = this.serviceAgenda.agendaProximos
  }

  ngOnInit() { 
  }
}
