
import { Component, OnInit } from '@angular/core';
import { ServiceUsuarioService } from '../services/ServiceUsuario.service';
import { subscribeOn } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  usuarioPerfil: any = {};
  errors = [];
  // amigos 
  // cantidadAmigos
  constructor(private serviceUsuario: ServiceUsuarioService, private router: Router, private route:ActivatedRoute) {

    this.usuarioPerfil = this.serviceUsuario.usuarioActivo
    // this.amigos = this.usuarioPerfil.amigos
    // this.cantidadAmigos = this.amigos.length
    // console.log(this.amigos)
    //  console.log(this.amigos.size) length tampoco
    //      this.cantAmigos = this.amigos.length
 //this.router. routeReuseStrategy.shouldReuseRoute=()=>false
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
  eliminarAmigo(idAmigo) {
    this.serviceUsuario.eliminarAmigo(idAmigo)
 //   this.router. routeReuseStrategy.shouldReuseRoute=()=>false
   this.resfrescarPantalla()
  }
  resfrescarPantalla() {
    this.router.navigateByUrl('/refresh', { skipLocationChange: true }).then(() =>
      this.router.navigate(["/perfil"]));
  }

}
/*Datos del usuario: Foto, nombre y apellido, username, tipo de usuario, email y cantidad de amigos.
Amigos: Listado de amigos del usuario. De cada amigo queremos ver su nombre y apellido y username. Además, desde el mismo listado, se podrá eliminar amigos.
*/