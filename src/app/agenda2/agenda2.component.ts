import { Component, OnInit } from '@angular/core';
import { ServiceEventoService } from '../services/ServiceEvento.service';
import { Evento } from '../angularDomain/Evento';
import { Router } from '@angular/router';
import { subscribeOn } from 'rxjs/operators';
import * as moment from 'moment';
import { map } from 'rxjs/operators';


export function mostrarError(component, error) {
  component.errors.push(error._body)
}

@Component({
  selector: 'agenda2',
  templateUrl: './agenda2.component.html',
  styleUrls: ['./agenda2.component.css']
})

export class Agenda2Component implements OnInit {
  usuarioPerfil: any = {};
  title = 'EVENTOS DE LA FECHA'
  errors = [];

  // EventosAgendaProximos: Array<Evento> = new Array<Evento>();
  //private serviceUsuario: ServiceUsuarioService,


  eventosAgenda: Array<Evento> = new Array<Evento>();
  eventosHoy: Array<Evento> = new Array<Evento>();
  eventosSemana: Evento[];
  eventosProximos: Evento[];

  constructor(private serviceEvento: ServiceEventoService, private router: Router) {
  }

  ngOnInit() {
    this.getEventosAgenda()
    this.getEventosHoy()
    this.getEventosSemana()
    this.getEventosProximos()
  }

  getEventosAgenda() {
    this.serviceEvento.agendaUsuario().subscribe(
      data => { this.eventosAgenda = data },
      error => {
        console.log("error", error)
        this.errors.push(error._body)
      }
    )

  }
  getEventosHoy() {
    this.serviceEvento.agendaHoy().subscribe(
      data => { this.eventosHoy = data },
      error => {
        console.log("error", error)
        this.errors.push(error._body)
      }
    )
  }
  getEventosSemana() {
    this.serviceEvento.agendaSemana().subscribe(
      data => { this.eventosSemana = data },
      error => {
        console.log("error", error)
        this.errors.push(error._body)
      }
    )
  }
  getEventosProximos() {
    this.serviceEvento.agendaProximos().subscribe(
      data => { this.eventosProximos = data },
      error => {
        console.log("error", error)
        this.errors.push(error._body)
      }
    )
  }

}
