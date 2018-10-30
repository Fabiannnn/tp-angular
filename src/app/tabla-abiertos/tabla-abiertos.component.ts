import { Component, OnInit } from '@angular/core';
import { ServiceEventoService } from '../services/ServiceEvento.service';
import { EventoAbierto } from '../angularDomain/EventoAbierto';
import { EventoCerrado } from '../angularDomain/EventoCerrado';
import { Router } from '@angular/router';
import { Evento } from '../angularDomain/Evento';

export function mostrarError(component, error) {
  component.errors.push(error._body)
}

@Component({
  selector: 'tabla-abiertos',
  templateUrl: './tabla-abiertos.component.html',
  styleUrls: ['./tabla-abiertos.component.css']
})

export class TablaAbiertosComponent implements OnInit {
  title = 'MIS EVENTOS ABIERTOS';
  usuarioPerfil: any = {};
  eventosAbiertos: Evento[]

  constructor(private serviceEvento: ServiceEventoService, private router: Router) {
  }

  ngOnInit() {
    this.getOrganizadosUsuarioAbiertos()
  }

  getOrganizadosUsuarioAbiertos() {
    this.serviceEvento.organizadosUsuarioAbiertos().subscribe(
      data => { this.eventosAbiertos = data },
      error => {
        console.log("error", error)
     //   this.errors.push(error._body)
      }
    )
  }

}
