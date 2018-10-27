import { Injectable } from '@angular/core';
import { Usuario } from '../angularDomain/Usuario';
import { usu } from '../angularDomain/usu';
import { checkAndUpdateNode } from '@angular/core/src/view/view';
import { map } from 'rxjs/operators';

import { Http, Response } from '@angular/http';
import { REST_SERVER_URL } from './configuration';

@Injectable({
  providedIn: 'root'
})

export class ServiceUsuarioService {
  idUsuario: String

  constructor(private http: Http){  this.idUsuario="1"}

  usuarioActivo() {
    return this.http.get(REST_SERVER_URL + "/usuarioPerfil/"+this.idUsuario).pipe(map(this.convertToUsuario))
  }

  private convertToUsuario(res: Response) {
    //aplico la funcion de transformacion a cada elemento del arreglo
    //return res.json().map(usuJson => usu.fromJson(usuJson))
    //aplico la funcion de transformacion a un unico elemento
    return Usuario.fromJson(res.json())
  }
  eliminarAmigo(idExAmigo: number) {
   const jsonExAmigo = JSON.parse('{ "idAmigo": ' + String(idExAmigo) + ' }');

    this.http.put(REST_SERVER_URL + "/eliminarAmigo/" + this.idUsuario, jsonExAmigo).subscribe()
  }

}

