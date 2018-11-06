import { Component, TemplateRef, OnInit } from '@angular/core';
import { ServiceEventoService } from '../services/ServiceEvento.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {BsDatepickerConfig, BsLocaleService} from 'ngx-bootstrap/datepicker';
import * as moment from 'moment';
import { defineLocale, esLocale } from 'ngx-bootstrap';
defineLocale('es', esLocale);
import { Locacion } from '../angularDomain/Locacion';
//import { EventoAbierto } from '../angularDomain/EventoAbierto';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'crear-evento-abierto',
  templateUrl: './crear-evento-abierto.component.html',
  styleUrls: ['./crear-evento-abierto.component.css']
})

export class CrearEventoAbiertoComponent {
  ngOnInit() {
    this.getLocaciones()

  }

  locaciones: Array<Locacion> = new Array<Locacion>();
  errors = [];
  modalRef: BsModalRef;
  jsonEvento: String;
  fechaDelDia = new Date()

  minDate: Date;

  datePickerConfig:Partial<BsDatepickerConfig>
  
  hstep = 1;
  mstep = 15;

  actual = moment(this.fechaDelDia)
  resto = 15 - (this.actual.minute() % 15)
  hora: Date = moment(this.actual).add(this.resto, "minutes").toDate()
  horaInicioEventoAbierto = this.hora
  horaFinEventoAbierto = this.hora

  cFechaInicio_val
  cFechaInicio(value: Date): void {
    this.cFechaInicio_val = value;
    this.cFechaInicio_val = moment(this.cFechaInicio_val).format('DD/MM/YYYY')
  }

  cHoraInicio_val
  cHoraInicio(value: Date): void {
    this.cHoraInicio_val = value;
    this.cHoraInicio_val = moment(this.cHoraInicio_val).format('HH:mm')
  }

  cFechaFin_val
  cFechaFin(value: Date): void {
    this.cFechaFin_val = value;
    this.cFechaFin_val = moment(this.cFechaFin_val).format('DD/MM/YYYY')
  }

  cHoraFin_val
  cHoraFin(value: Date): void {
    this.cHoraFin_val = value;
    this.cHoraFin_val = moment(this.cHoraFin_val).format('HH:mm')
  }

  cFechaMax_val
  cFechaMax(value: Date): void {
    this.cFechaMax_val = value;
    this.cFechaMax_val = moment(this.cFechaMax_val).format('DD/MM/YYYY')
  }

  cFechaLimite_val
  cFechaLimite(value: Date): void {
    this.cFechaLimite_val = value;
    this.cFechaLimite_val = moment(this.cFechaLimite_val).format('DD/MM/YYYY')
  }

  locale = 'es'

  constructor(private router: Router, private modalService: BsModalService, private localeService: BsLocaleService, private serviceEvento: ServiceEventoService) {
   
    this.localeService.use(this.locale);

    this.datePickerConfig = Object.assign({},
      {containerClass:'theme-dark-blue'},
      {dateInputFormat: 'DD/MM/YYYY'},
      {showWeekNumbers: false}
      );

    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  list = ['Mi Casa','Tu Casa'];

  nombre = null
  locacion = null
  organizador = null
  edadMinima = null
  precioEntrada = null

  model = new EventoAbierto(
    this.nombre, 
    this.locacion, 
    'el negro de whatsapp', 
    moment(this.cFechaInicio_val).format('DD/MM/YYYY'), 
    moment(this.cHoraInicio_val).format('HH:mm'),
    moment(this.cFechaFin_val).format('DD/MM/YYYY'), 
    moment(this.cHoraFin_val).format('HH:mm'),
    moment(this.cFechaLimite_val).format('DD/MM/YYYY'),
    this.edadMinima, 
    this.precioEntrada);

  onSubmit() { console.log(JSON.stringify(this.model)) }

  get diagnostic() { return JSON.stringify(this.model); }




getLocaciones() {
  this.serviceEvento.listadoLocaciones().subscribe(
    data => { this.locaciones = data },
    error => {
      console.log("error", error)
      this.errors.push(error._body)
    }
  )

}

refrescarPantalla() {
  this.router.navigateByUrl('/refresh', { skipLocationChange: true }).then(() =>
    this.router.navigate(["/misEventos/organizados-por-mi"]));
}

}



class EventoAbierto {
  nombre: String
  locacion: String
  organizador: String
  fechaInicio: String
  horaInicio: String
  fechaFin: String
  horaFin: String
  fechaLimite: String
  edadMinima: number
  precioEntrada: number

  constructor (
    unNombre: String, 
    unaLocacion: String,
    unOrganizador: String, 
    unaFechaInicio: String,
    unaHoraInicio: String,
    unaFechaFin: String,
    unaHoraFin: String,
    unaFechaLimite: String,
    unaEdadMinima: number,
    unPrecioEntrada: number){
      this.nombre = unNombre
      this.locacion = unaLocacion
      this.organizador = unOrganizador
      this.fechaInicio = unaFechaInicio
      this.horaInicio = unaHoraInicio
      this.fechaFin = unaFechaFin
      this.horaFin = unaHoraFin
      this.fechaLimite = unaFechaLimite
      this.edadMinima = unaEdadMinima
      this.precioEntrada = unPrecioEntrada
    }

}
