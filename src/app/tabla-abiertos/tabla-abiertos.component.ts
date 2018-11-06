import { Component, OnInit } from '@angular/core';
import { ServiceEventoService } from '../services/ServiceEvento.service';
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
  //FP
  eventos: Array<Evento> = new Array<Evento>();
  errors = [];

  constructor(private serviceEvento: ServiceEventoService, private router: Router) {
  }

  ngOnInit() {
    //FP
    this.getOrganizadosPorMi()
  }
  //FP
  getOrganizadosPorMi(): void {
    this.serviceEvento.eventosAbiertoDelUsuario().subscribe(
      data => { this.eventos = data },
      error => {
        console.log("error", error)
        this.errors.push(error._body)
      }
    )
    //this.eventos.filter(evento => evento instanceof EventoAbierto);
  }
}
