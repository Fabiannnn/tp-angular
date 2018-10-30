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
  selector: 'agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})

export class AgendaComponent implements OnInit {
  usuarioPerfil: any = {};
  title = 'EVENTOS DE LA FECHA'
  errors = [];

  // EventosAgendaProximos: Array<Evento> = new Array<Evento>();
  //private serviceUsuario: ServiceUsuarioService,


  eventosAgenda: Evento[]
  eventosHoy: Evento[]
  eventosSemana: Evento[]
  eventosProximos: Evento[]



  constructor(private serviceEvento: ServiceEventoService, private router: Router) {
  }

  ngOnInit() {
    this.getEventosAgenda()
    this.getEventosHoy()
    this.getEventosSemana()
    this.getEventosProximos() 
   }

  getEventosAgenda(){
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
