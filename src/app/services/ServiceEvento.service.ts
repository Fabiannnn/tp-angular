import { Injectable } from '@angular/core';
import { Evento } from '../angularDomain/Evento';
import { Locacion } from '../angularDomain/Locacion';
import { Usuario } from '../angularDomain/Usuario';
import { EventoAbierto } from '../angularDomain/EventoAbierto';
import { EventoCerrado } from '../angularDomain/EventoCerrado';
import { Invitacion } from '../angularDomain/Invitacion';
import { UsuarioFree } from '../angularDomain/UsuarioFree';
import { UsuarioProfesional } from '../angularDomain/UsuarioProfesional';
import { Entrada } from '../angularDomain/Entrada';
import * as moment from 'moment';
import { map } from 'rxjs/operators';

import { Http, Response } from '@angular/http';
import { REST_SERVER_URL } from './configuration';
@Injectable({
  providedIn: 'root'
})
export class ServiceEventoService {
  EVENTOS_CERRADO: Array<EventoCerrado> = new Array<EventoCerrado>();
  EVENTOS_ABIERTO: Array<EventoAbierto> = new Array<EventoAbierto>();
  eventosAgenda;
  idUsuario: String
  constructor(private http: Http) { this.idUsuario = "1" }

  private convertToEvento(res: Response) {
    //aplico la funcion de transformacion a cada elemento del arreglo
    //return res.json().map(eventoJson => evento.fromJson(eventoJson))
    //aplico la funcion de transformacion a un unico elemento
    return Evento.fromJson(res.json())
   }
  agendaUsuario() {
   this.eventosAgenda = (this.http.get(REST_SERVER_URL + "/agendaUsuario/" + this.idUsuario).pipe(map(this.convertToEvento))).pipe();
   console.log(this.eventosAgenda) 
   return (this.eventosAgenda)
  }
}

  /*  getAgendaHoy(): Array<Evento> {
      return (this.http.get(REST_SERVER_URL + "/usuarioAgenda/"+this.idUsuario).pipe(map(this.convertToEvento)))
      return this.Eventos.filter(evento => moment(evento.fechaDeInicio).format('L') === moment().format('L'))
    }
  
    getAgendaSemana(): Array<Evento> {
      return("notengoganas")
      return this.Eventos.filter(evento => (moment().format('L') < moment(evento.fechaDeInicio).format('L')) && (moment(evento.fechaDeInicio).format('L') < moment().add(7, 'days').format('L')))
    }
  
    getAgendaProximos(): Array<Evento> {
      return("notengoganas")
      return this.Eventos.filter(evento => (moment(evento.fechaDeInicio).format('L')) > moment().add(7, 'days').format('L'))
    }*/

