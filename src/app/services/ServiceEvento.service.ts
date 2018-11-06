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
import { toDate, formatDate } from '@angular/common/src/i18n/format_date';
import { format } from 'util';

@Injectable({
  providedIn: 'root'
})
export class ServiceEventoService {

  locaciones: Locacion[];
  //EVENTOS_CERRADO: Array<EventoCerrado> = new Array<EventoCerrado>();
  //EVENTOS_ABIERTO: Array<EventoAbierto> = new Array<EventoAbierto>();
  eventosAgenda: Array<Evento> = new Array<Evento>();
  /* eventosAgendaHoy:Evento[];
   eventosAgendaSemana:Evento[];
   eventosAgendaProximos:Evento[];*/
  formatoFecha = "YYYY-MM-DD HH:mm";
  idUsuario: String;

  constructor(private http: Http) { this.idUsuario = "1" }

  private convertToEvento(res: Response) {
    //aplico la funcion de transformacion a cada elemento del arreglo
    //return res.json().map(eventoJson => evento.fromJson(eventoJson))
    //aplico la funcion de transformacion a un unico elemento
    return res.json().map(evento => Evento.fromJson(evento))
  }

  private convertToLocaciones(res: Response) {
    //aplico la funcion de transformacion a cada elemento del arreglo
    //return res.json().map(eventoJson => evento.fromJson(eventoJson))
    //aplico la funcion de transformacion a un unico elemento
    return res.json().map(locacion => Locacion.fromJson(locacion))
  }

  agendaUsuario() {
    return (this.http.get(REST_SERVER_URL + "/agendaUsuario/" + this.idUsuario).pipe(map(this.convertToEvento)));
  }

  agendaHoy() {
    return (this.http.get(REST_SERVER_URL + "/agendaHoy/" + this.idUsuario).pipe(map(this.convertToEvento)));
  }

  agendaSemana() {
    return (this.http.get(REST_SERVER_URL + "/agendaSemana/" + this.idUsuario).pipe(map(this.convertToEvento)));
  }

  agendaProximos() {
    return (this.http.get(REST_SERVER_URL + "/agendaProximos/" + this.idUsuario).pipe(map(this.convertToEvento)));
  }
  /*	
  organizadosUsuarioAbiertos() {
   return  (this.http.get(REST_SERVER_URL + "/organizadosUsuarioAbiertos/" + this.idUsuario).pipe(map(this.convertToEvento)));
  }
  organizadosUsuarioCerrados() {
   return  (this.http.get(REST_SERVER_URL + "/organizadosUsuarioCerrados/" + this.idUsuario).pipe(map(this.convertToEvento)));
  }*/

  //FP Para traer los eventos del usuario.
  eventosAbiertoDelUsuario() {
    return (this.http.get(REST_SERVER_URL + "/organizados-por-mi-abiertos/" + this.idUsuario).pipe(map(this.convertirToEventoAbierto)));
  }

  private convertirToEventoAbierto(res: Response) {
    return res.json().map(evento => EventoAbierto.crearEventofromJson(evento))
  }

  //FP Para traer los eventos del usuario.
  eventosCerradoDelUsuario() {
    return (this.http.get(REST_SERVER_URL + "/organizados-por-mi-cerrados/" + this.idUsuario).pipe(map(this.convertirToEventoCerrado)));
  }

  private convertirToEventoCerrado(res: Response) {
    return res.json().map(evento => EventoCerrado.crearEventofromJson(evento))
  }

  listadoLocaciones() {
    return (this.http.get(REST_SERVER_URL + "/locaciones").pipe(map(this.convertToLocaciones)));
  }
  crearEventoCerrado(EventoCerrado: String) {
    console.log(this.http.put(REST_SERVER_URL + "/organizarEventoCerrado/" + this.idUsuario, EventoCerrado).subscribe());
    this.http.put(REST_SERVER_URL + "/organizarEventoCerrado/" + this.idUsuario, EventoCerrado).subscribe();
  }

}
/*
  agendaHoy(){
 
    return this.eventosAgenda.filter(unEvento => 
     ( this.getFecha(unEvento.fechaDeInicio) <  moment().add(1, 'days').format(this.formatoFecha) ))
  }
*/