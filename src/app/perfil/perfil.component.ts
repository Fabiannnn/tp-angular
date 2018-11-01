
import { Component, OnInit } from '@angular/core';
import { ServiceUsuarioService } from '../services/ServiceUsuario.service';
import { subscribeOn } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Usuario } from '../angularDomain/Usuario';
//ActivatedRoute,
export function mostrarError(component, error) {
  component.errors.push(error._body)
}

@Component({
  selector: 'perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})


export class PerfilComponent implements OnInit {
  usuarioPerfil: any = {};
  errors = [];
  amigosUsuario:Usuario[];
  eventosAgendaUsuario
  constructor(private serviceUsuario: ServiceUsuarioService, private router: Router) {
    //, private route:ActivatedRoute
   // this.usuarioPerfil = this.serviceUsuario.usuarioActivo
    //this.router. routeReuseStrategy.shouldReuseRoute=()=>false
  }

  ngOnInit() {  
    this.getUsuario()
    this.getAmigosUsuario()
    //  this.getEventosAgenda()

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

  getEventosAgenda() {
    this.serviceUsuario.eventosAgendaUsuario().subscribe(
      data => { this.usuarioPerfil.eventosAgenda = data },
      error => {
        console.log("error", error)
        this.errors.push(error._body)
      }
    )
  }

  getAmigosUsuario() {
    this.serviceUsuario.amigosUsuario().subscribe(
      data => { this.usuarioPerfil.amigos = data },
      error => {
        console.log("error", error)
        this.errors.push(error._body)
      }
    )
  }

  eliminarAmigo(idAmigo) {
    this.serviceUsuario.eliminarAmigo(idAmigo)
    //   this.router. routeReuseStrategy.shouldReuseRoute=()=>false
    this.refrescarPantalla()
   //this.reload()
  }

  refrescarPantalla(){
  this.router.navigateByUrl('/refresh', { skipLocationChange: true }).then(() =>
  this.router.navigate(["/perfil"]));
  } 
  reload(){
    // Here is the other part of the trick
    this.router.navigated = false;
    this.router.navigate([this.router.url]);
}

}



/*Datos del usuario: Foto, nombre y apellido, username, tipo de usuario, email y cantidad de amigos.
Amigos: Listado de amigos del usuario. De cada amigo queremos ver su nombre y apellido y username. Además, desde el mismo listado, se podrá eliminar amigos.
*/