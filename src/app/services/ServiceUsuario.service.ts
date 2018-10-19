import { Injectable } from '@angular/core';
import { Usuario } from '../angularDomain/Usuario';
import { checkAndUpdateNode } from '@angular/core/src/view/view';
@Injectable({
  providedIn: 'root'
})

export class ServiceUsuarioService {
  usuarioIngresante: Usuario


  get usuarioActivo(): Usuario {
    this.usuarioIngresante = new Usuario(1, "@Victoria!!!! ", "Usuario Victorioso", "seHace@camino.el.andar", [new Usuario(4, "@eldelAmigo ", 'Del amigo', "mis_amigos@sodel.amigo", []),new Usuario(2, "@elusuarioAmigo ", 'Primer amigo', "mis_amigos@son.unos.laralara", []), new Usuario(3, "@elOtroAmigo ", 'Otro amigo', "mis_Otros_amigos@son.unos.laralara", [])])

    return this.usuarioIngresante

  }

  constructor() { }

}
