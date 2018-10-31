import { Injectable } from '@angular/core';
import { Usuario } from '../angularDomain/Usuario';
import { checkAndUpdateNode } from '@angular/core/src/view/view';
import { map } from 'rxjs/operators';
import { Evento } from '../angularDomain/Evento';
import { Http, Response } from '@angular/http';
import { REST_SERVER_URL } from './configuration';

@Injectable({
  providedIn: 'root'
})

export class ServiceUsuarioService {
  idUsuario: String
  amigos: Array<Usuario> = new Array<Usuario>();
  eventosAgenda:Array<Evento>= new Array<Evento>();

  constructor(private http: Http){  this.idUsuario="1"}

  usuarioActivo() {
    return this.http.get(REST_SERVER_URL + "/usuarioPerfil/"+this.idUsuario).pipe(map(this.convertToUsuario))
  }
  amigosUsuario() {
    return (this.http.get(REST_SERVER_URL + "/amigosUsuario/"+this.idUsuario).pipe(map(this.convertToUsuario)))//.pipe()
  }
  private convertToUsuario(res: Response) {
    //aplico la funcion de transformacion a cada elemento del arreglo
    //return res.json().map(usuJson => usu.fromJson(usuJson))
    //aplico la funcion de transformacion a un unico elemento
    return Usuario.fromJson(res.json())
  }
  eventosAgendaUsuario() {
    return (this.http.get(REST_SERVER_URL + "/eventosAgendaUsuario/"+this.idUsuario).pipe(map(this.convertToEvento))).pipe()
  }
  private convertToEvento(res: Response) {
    //aplico la funcion de transformacion a cada elemento del arreglo
    //return res.json().map(usuJson => usu.fromJson(usuJson))
    //aplico la funcion de transformacion a un unico elemento
    return Evento.fromJson(res.json())
  }
  eliminarAmigo(idExAmigo: number) {
   const jsonExAmigo = JSON.parse('{ "idAmigo": ' + String(idExAmigo) + ' }');

    this.http.put(REST_SERVER_URL + "/eliminarAmigo/" + this.idUsuario, jsonExAmigo).subscribe()
  }

}

