import { Injectable } from '@angular/core';
import { Usuario } from '../angularDomain/Usuario';
import { checkAndUpdateNode } from '@angular/core/src/view/view';
@Injectable({
  providedIn: 'root'
})

export class ServiceUsuarioService {
  usuarioIngresante: Usuario
  amigos: Array<Usuario>


  get usuarioActivo(): Usuario {
    this.usuarioIngresante = new Usuario(1, "@Victoria!!!! ", "Usuario Victorioso", "seHace@camino.el.andar",[new Usuario(2,  "@elusuarioAmigo ",'Primer amigo', "mis_amigos@son.unos.laralara", []), new Usuario(3,  "@elOtroAmigo ",'Otro amigo', "mis_Otros_amigos@son.unos.laralara", [])] )

    return this.usuarioIngresante
   
  }
  get amigosUsuario(): Array<Usuario> {
    const amigos = [new Usuario(2,  "@elusuarioAmigo ",'Primer amigo', "mis_amigos@son.unos.laralara", []), new Usuario(3,  "@elOtroAmigo ",'Otro amigo', "mis_Otros_amigos@son.unos.laralara", [])]
   console.log(this.amigos)
    return this.amigos

  }
/*  get cantidadAmigos():number{
 this.cantAmigos=this.amigos.length
 return this.cantAmigos
  }*/
  constructor() { }

}
