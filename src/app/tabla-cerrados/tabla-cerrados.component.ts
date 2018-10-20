import { Component, OnInit } from '@angular/core';
import { ServiceEventoService } from '../services/ServiceEvento.service';
import { Evento } from '../angularDomain/Evento';


@Component({
  selector: 'tabla-cerrados',
  templateUrl: './tabla-cerrados.component.html',
  styleUrls: ['./tabla-cerrados.component.css']
})
export class TablaCerradosComponent implements OnInit {
    eventosCreadosPorMi: Array<Evento>;
    
    constructor(private serviceEvento: ServiceEventoService) {
      serviceEvento.obtenerEventosAbiertos()
      this.eventosCreadosPorMi = ServiceEventoService.EVENTOS;
    }
  
    ngOnInit() {
    }
  
  }
  
