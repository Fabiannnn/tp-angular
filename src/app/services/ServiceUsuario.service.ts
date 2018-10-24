import { Injectable } from '@angular/core';
import { Usuario } from '../angularDomain/Usuario';
import { UsuarioFree } from '../angularDomain/UsuarioFree';
import { UsuarioAmateur } from '../angularDomain/UsuarioAmateur';

@Injectable({
  providedIn: 'root'
})

export class ServiceUsuarioService {
  usuarioIngresante: Usuario


  get usuarioActivo(): Usuario {
    this.usuarioIngresante = new Usuario(1, "@Victoria!!!! ", "Usuario Victorioso", "seHace@camino.el.andar",
      [new Usuario(4, "@eldelAmigo ", 'Del amigo', "mis_amigos@sodel.amigo", [], new UsuarioFree()),
      new Usuario(2, "@elusuarioAmigo ", 'Primer amigo', "mis_amigos@son.unos.laralara", [], new UsuarioFree()),
      new Usuario(3, "@elOtroAmigo ", 'Otro amigo', "mis_Otros_amigos@son.unos.laralara", [], new UsuarioFree())],
      new UsuarioAmateur())
    return this.usuarioIngresante
  }

  constructor() { }

}
