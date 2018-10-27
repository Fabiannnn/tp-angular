
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../angularDomain/Usuario';
import { ServiceUsuarioService } from '../services/ServiceUsuario.service';
import { subscribeOn } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  usuarioPerfil: any = {};
  errors = [];
  constructor(private serviceUsuario: ServiceUsuarioService, private router:Router) {

  }

  ngOnInit() {
    this.getUsuario()
  }

  getUsuario() {
    this.serviceUsuario.usuarioActivo().subscribe(
      data => { this.usuarioPerfil = data },
      error => {
        console.log("error", error)
        this.errors.push(error._body)
      }
    )
  }
  eliminarAmigo(idAmigo){
    this.serviceUsuario.eliminarAmigo(idAmigo)
    this.resfrescarPantalla()
  }
 resfrescarPantalla(){
    this.router.navigateByUrl('/misEventos/agenda', { skipLocationChange: true }).then(() =>
    this.router.navigate(["/perfil"]));
  }

}
/*Datos del usuario: Foto, nombre y apellido, username, tipo de usuario, email y cantidad de amigos.
Amigos: Listado de amigos del usuario. De cada amigo queremos ver su nombre y apellido y username. Además, desde el mismo listado, se podrá eliminar amigos.
*/