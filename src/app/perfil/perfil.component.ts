import { Component, OnInit } from '@angular/core';
import { Usuario } from '../angularDomain/Usuario';
import { ServiceUsuarioService } from '../services/ServiceUsuario.service';

@Component({
  selector: 'perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  usuarioPerfil
  amigos
  cantidadAmigos


  constructor(private serviceUsuario: ServiceUsuarioService) {
    this.usuarioPerfil = this.serviceUsuario.usuarioActivo
    this.amigos = this.usuarioPerfil.amigos
         this.cantidadAmigos= this.amigos.length
     console.log(this.amigos)
 //  console.log(this.amigos.size) length tampoco
 //      this.cantAmigos = this.amigos.length
  }

  ngOnInit() {

  }

}
/*Datos del usuario: Foto, nombre y apellido, username, tipo de usuario, email y cantidad de amigos.

Amigos: Listado de amigos del usuario. De cada amigo queremos ver su nombre y apellido y username. Además, desde el mismo listado, se podrá eliminar amigos.
*/