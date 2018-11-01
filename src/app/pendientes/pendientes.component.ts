import { Component, OnInit } from '@angular/core';
import { ServiceInvitacionesService } from '../services/ServiceInvitaciones.service'
import { Invitacion } from '../angularDomain/Invitacion';
import { Router } from '@angular/router';


export function mostrarError(component, error) {
  component.errors.push(error._body)
}

@Component({
  selector: 'pendientes',
  templateUrl: './pendientes.component.html',
  styleUrls: ['./pendientes.component.css']
})

export class PendientesComponent implements OnInit {
  title = 'MIS INVITACIONES PENDIENTES';
  usuarioPerfil: any = {};
  invitacionesPend: Invitacion[];
  errors = [];
  constructor(private serviceInvitaciones: ServiceInvitacionesService, private router: Router) { 
  
   }

  ngOnInit() {
    this.getInvitacionesPendientes()
  
  }

  getInvitacionesPendientes() {
    this.serviceInvitaciones.invitacionesPendientes().subscribe(
      data => { this.invitacionesPend = data },
      error => {
        console.log("error", error)
        this.errors.push(error._body)
      }
    )
  }
  getRechazarInvitacion(unEventoCerrado) {
    const unEventoCerradoNombre = ('{ "unEventoCerrado": "' + unEventoCerrado + '" }');
    this.serviceInvitaciones.rechazarInvitacion(unEventoCerradoNombre)
        //   this.router. routeReuseStrategy.shouldReuseRoute=()=>false
  this.refrescarPantalla()
  }
 
  refrescarPantalla(){
    this.router.navigateByUrl('/refresh', { skipLocationChange: true }).then(() =>
    this.router.navigate(["/pendientes"]));
  }

}

