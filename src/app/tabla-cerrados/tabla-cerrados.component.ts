import { Component, OnInit } from '@angular/core';
import { ServiceEventoService } from '../services/ServiceEvento.service'
import { EventoCerrado } from '../angularDomain/EventoCerrado';
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
  eventosCerrados: Evento[]

  constructor(private serviceEvento: ServiceEventoService, private router: Router) {
  }

  ngOnInit() {
    this.getOrganizadosUsuarioCerrados()
  }

  getOrganizadosUsuarioCerrados() {
    this.serviceEvento.organizadosUsuarioCerrados().subscribe(
      data => { this.eventosCerrados = data },
      error => {
        console.log("error", error)
     //   this.errors.push(error._body)
      }
    )
  }

}
