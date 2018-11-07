import { Component, Input, OnInit } from '@angular/core';
import { ServiceEventoService } from '../services/ServiceEvento.service';
import { Evento } from '../angularDomain/Evento';
import { Router } from '@angular/router';
import { subscribeOn } from 'rxjs/operators';
import * as moment from 'moment';
import { map } from 'rxjs/operators';


export function mostrarError(component, error) {
  component.errors.push(error._body)
}

@Component({
  selector: 'agenda2',
  templateUrl: './agenda2.component.html',
  styleUrls: ['./agenda2.component.css']
})

export class Agenda2Component {
  usuarioPerfil: any = {};
  title = 'EVENTOS DE LA FECHA'
  errors = [];


  constructor(private router: Router) {
  }

  
 @Input()   eventosAgenda: Array<Evento> = new Array<Evento>();

}
