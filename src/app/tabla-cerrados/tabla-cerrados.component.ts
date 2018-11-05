import { Component, OnInit } from '@angular/core';
import { ServiceEventoService } from '../services/ServiceEvento.service'
import { Router } from '@angular/router';
import { Evento } from '../angularDomain/Evento';

export function mostrarError(component, error) {
  component.errors.push(error._body)
}

@Component({
  selector: 'tabla-cerrados',
  templateUrl: './tabla-cerrados.component.html',
  styleUrls: ['./tabla-cerrados.component.css']
})

export class TablaCerradosComponent implements OnInit {
  title = 'MIS EVENTOS CERRADOS';
  usuarioPerfil: any = {};
  //FP
  eventos: Array<Evento> = new Array<Evento>();
  errors = [];

  constructor(private serviceEvento: ServiceEventoService, private router: Router) {
  }

  ngOnInit() {
    //FP
    this.getOrganizadosPorMi();
  }

  //FP
  getOrganizadosPorMi(): void {
    this.serviceEvento.eventosCerradoDelUsuario().subscribe(
      data => { this.eventos = data },
      error => {
        console.log("error", error)
        this.errors.push(error._body)
      }
    )
    //this.eventos.filter(evento => evento instanceof EventoCerrado);
  }
}
