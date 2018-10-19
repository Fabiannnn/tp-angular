import { Injectable } from '@angular/core';
import { Usuario } from '../angularDomain/Usuario';
@Injectable({
  providedIn: 'root'
})

export class ServiceUsuarioService {
  usuario1: Usuario
  amigos: Array<Usuario>
  get usuarioActivo(): Usuario {//Usuario
    return this.usuario1 = new Usuario(1, 'pruebe')
    //   return [{
    //      id: 1,
    //    nombreUsuario: "usuario1900"
    //}]
    //const usuarioPerfi1=new Usuario(1,'usuario1')

    //     return (usuario1)

  }
  get amigosUsuario(): Array<Usuario> {
    const amigos = [new Usuario(2, 'John Doe'), new Usuario(2, 'John Doe')]
    return amigos
  }
  constructor() { }

}
