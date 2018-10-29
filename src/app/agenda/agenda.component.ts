import { Component, OnInit } from '@angular/core';
import { ServiceEventoService } from '../services/ServiceEvento.service';
import { Evento } from '../angularDomain/Evento';
import { Router } from '@angular/router';
import { subscribeOn } from 'rxjs/operators';


//import { ServiceUsuarioService } from '../services/ServiceUsuario.service';

//ActivatedRoute,
export function mostrarError(component, error) {
  component.errors.push(error._body)
}

@Component({
  selector: 'agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})

export class AgendaComponent implements OnInit {
  usuarioPerfil: any = {};
  title = 'EVENTOS DE LA FECHA'
  errors = [];
 
  // EventosAgendaProximos: Array<Evento> = new Array<Evento>();
  //private serviceUsuario: ServiceUsuarioService,


   eventosAgenda

  constructor(private serviceEvento: ServiceEventoService, private router: Router) {
    this.eventosAgenda = this.serviceEvento.agendaUsuario
  }
  ngOnInit() {
    this.getEventosAgenda()
  }
 getEventosAgenda() {
    this.serviceEvento.agendaUsuario().subscribe(
      data => { this.eventosAgenda = data },
      error => {
        console.log("error", error)
        this.errors.push(error._body)
      }
    )
  }

}
  //, private route:ActivatedRoute
  //this.usuarioPerfil = this.serviceUsuario.usuarioActivo
  //this.router. routeReuseStrategy.shouldReuseRoute=()=>false}


  // this.getUsuario()
  //var  eventosDeHoy= this.serviceEvento.getAgendaUsuario;//Hoy();
  //  this.EventosAgendaSemana = this.getAgendaUsuario();//();
  //this.EventosAgendaProximos = this.getAgendaUsuario();//Proximos();


  /* getUsuario() {
     this.serviceUsuario.usuarioActivo().subscribe(
       data => { this.usuarioPerfil = data },
       error => {
         console.log("error", error)
         this.errors.push(error._body)
       }
     )
   }*/


 