import { Component, OnInit } from '@angular/core';
import {Usuario } from '../angularDomain/Usuario';
import { ServiceUsuarioService} from '../services/ServiceUsuario.service';

@Component({
  selector: 'perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
//usuarioPerfil
//amigos
usuarioPerfil = new Usuario(1,"ttttt")
console.log(usuarioPerfil)
 // constructor(private serviceUsuario: ServiceUsuarioService){
 // this.usuarioPerfil = this.serviceUsuario.usuarioActivo
//  this.amigos = this.serviceUsuario.amigosUsuario
// }
constructor(){}
  ngOnInit() {
  
  }

}
