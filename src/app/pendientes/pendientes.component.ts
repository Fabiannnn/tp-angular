import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Component,Input,  OnInit } from '@angular/core';
import { ServiceInvitacionesService } from '../services/ServiceInvitaciones.service';
import { Invitacion } from '../angularDomain/Invitacion';
import { ContadorComponent } from '../contador/contador.component';
import { ContadorDomain } from '../contador/contadorDomain';
import{ MatTooltipModule} from '@angular/material/tooltip';


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
  invitacionesPend: Array<Invitacion> = new Array<Invitacion>();
  errors = [];
   @Input() 
   valorInicial: number
   contador: ContadorDomain
   public errorMessage : string = ""
  constructor(private serviceInvitaciones: ServiceInvitacionesService, private router: Router) { 
  
   }

  
   
  ngOnInit() {
    this.getInvitacionesPendientes()
    this.contador = new ContadorDomain(this.valorInicial)
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
  
  getAceptarInvitacion(unEventoCerrado, cantidadDeAcompanantes) {
    const unEventoCerradoYCantidadDeAcompanantes = ('{ "unEventoCerrado": "' + unEventoCerrado + '",  "cantidadDeAcompanantesConfirmados": "' + cantidadDeAcompanantes + '" }');
    console.log(unEventoCerradoYCantidadDeAcompanantes)
    this.serviceInvitaciones.aceptarInvitacion(unEventoCerradoYCantidadDeAcompanantes)
        //   this.router. routeReuseStrategy.shouldReuseRoute=()=>false
    this.refrescarPantalla()
  }
  refrescarPantalla(){
    this.router.navigateByUrl('/refresh', { skipLocationChange: true }).then(() =>
    this.router.navigate(["./misEventos/pendientes"]));
  }

}

