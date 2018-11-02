import { Injectable } from '@angular/core';
import { checkAndUpdateNode } from '@angular/core/src/view/view';
import { map } from 'rxjs/operators';
import { Invitacion } from '../angularDomain/Invitacion';
import { Http, Response } from '@angular/http';
import { REST_SERVER_URL } from './configuration';

@Injectable({
  providedIn: 'root'
})

export class ServiceInvitacionesService {
  idUsuario: String
  invitacionesPend: Array<Invitacion> = new Array<Invitacion>();

  constructor(private http: Http){  this.idUsuario="1"}
  
  private convertToInvitacion(res: Response) {
    //aplico la funcion de transformacion a cada elemento del arreglo
    //return res.json().map(eventoJson => evento.fromJson(eventoJson))
    //aplico la funcion de transformacion a un unico elemento
    console.log(res.json().map(invitacion =>Invitacion.fromJson(invitacion)))
    return res.json().map(invitacion =>Invitacion.fromJson(invitacion))
   }
  invitacionesPendientes() {
   return  (this.http.get(REST_SERVER_URL + "/invitacionesPendientes/" + this.idUsuario).pipe(map(this.convertToInvitacion)));
  }

  rechazarInvitacion(unEventoCerrado: String) {
    this.http.put(REST_SERVER_URL + "/rechazarInvitacion/" + this.idUsuario, unEventoCerrado).subscribe();
   }
  aceptarInvitacion(unEventoCerradoYCantidadDeAcompanantes: String) {
    this.http.put(REST_SERVER_URL + "/aceptarInvitacion/" + this.idUsuario, unEventoCerradoYCantidadDeAcompanantes).subscribe();
   }
 
}