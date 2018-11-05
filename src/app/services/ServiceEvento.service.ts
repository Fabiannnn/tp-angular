import { Injectable } from '@angular/core';
import { Evento } from '../angularDomain/Evento';
import { EventoAbierto } from '../angularDomain/EventoAbierto';
import { EventoCerrado } from '../angularDomain/EventoCerrado';
//import * as moment from 'moment';
import { map } from 'rxjs/operators';
import { Http, Response } from '@angular/http';
import { REST_SERVER_URL } from './configuration';

@Injectable({
  providedIn: 'root'
})
export class ServiceEventoService {
  //FP
  //EVENTOS_CERRADO: Array<EventoCerrado> = new Array<EventoCerrado>();
  //EVENTOS_ABIERTO: Array<EventoAbierto> = new Array<EventoAbierto>();
  eventosAgenda: Evento[];
  formatoFecha = "YYYY-MM-DD HH:mm";
  idUsuario: String

  constructor(private http: Http) { this.idUsuario = "1" }

  private convertToEvento(res: Response) {
    //aplico la funcion de transformacion a cada elemento del arreglo
    //return res.json().map(eventoJson => evento.fromJson(eventoJson))
    //aplico la funcion de transformacion a un unico elemento
    return res.json().map(evento => Evento.fromJson(evento))
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
}