import { Component, TemplateRef, OnInit } from '@angular/core';
import { ServiceEventoService } from '../services/ServiceEvento.service';
import { FormsModule } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import * as moment from 'moment';
import { defineLocale, esLocale } from 'ngx-bootstrap';
defineLocale('es', esLocale);
import { HostListener, ViewChild } from '@angular/core';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
import { Locacion } from '../angularDomain/Locacion';
import { Router } from '@angular/router';
import { EventoCerrado } from '../angularDomain/EventoCerrado';

@Component({
  selector: 'crear-evento-cerrado',
  templateUrl: './crear-evento-cerrado.component.html',
  styleUrls: ['./crear-evento-cerrado.component.css']
})

export class CrearEventoCerradoComponent {

  ngOnInit() {
    this.getLocaciones()

  }
  locaciones: Array<Locacion> = new Array<Locacion>();
  errors = [];
  modalRef: BsModalRef;
  jsonEvento: String;
  //nuevoEventoCerrado: EventoCerrado;
  //FP
  usuarioOrganizador: number = 1;
  nombreDelEvento: String;
  laLocacion: String;
  fechaInicioEventoCerrado: any;
  fechaFinEventoCerrado: any;
  fechaLimiteEvento: any;
  cantMaximaInvitados: number;

  fecha = new Date()
  actual = moment(this.fecha)
  resto = 15 - (this.actual.minute() % 15)
  hora: Date = moment(this.actual).add(this.resto, "minutes").toDate()
  horaInicioEventoCerrado = this.hora;
  horaFinEventoCerrado = this.hora;

  minDate: Date;

  datePickerConfig: Partial<BsDatepickerConfig>

  list: any[] = [];

  hstep = 1;
  mstep = 15;

  cFechaInicio_val
  cFechaInicio(value: Date): void {
    this.cFechaInicio_val = value;
    this.cFechaInicio_val = moment(this.cFechaInicio_val).format('DD/MM/YYYY')
  }

  chorainicio_val
  cHoraInicio(value: Date): void {
    this.chorainicio_val = value;
    this.chorainicio_val = moment(this.chorainicio_val).format('HH:mm')
  }

  cfechafin_val
  cFechaFin(value: Date): void {
    this.cfechafin_val = value;
    this.cfechafin_val = moment(this.cfechafin_val).format('DD/MM/YYYY')
  }

  chorafin_val
  cHoraFin(value: Date): void {
    this.chorafin_val = value;
    this.chorafin_val = moment(this.chorafin_val).format('HH:mm')
  }

  cfechamax_val
  cFechaMax(value: Date): void {
    this.cfechamax_val = value;
    this.cfechamax_val = moment(this.cfechamax_val).format('DD/MM/YYYY')
  }

  locale = 'es'


  constructor(private router: Router, private modalService: BsModalService, private localeService: BsLocaleService, private serviceEvento: ServiceEventoService) {

    this.localeService.use(this.locale);

    this.datePickerConfig = Object.assign({},
      { containerClass: 'theme-dark-blue' },
      { dateInputFormat: 'DD/MM/YYYY' },
      { showWeekNumbers: false }
    );

    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

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

  getGenerarEvento() {
    // this.nuevoEventoCerrado= new EventoCerrado(this.nombreEventoCerrado, )
    //nuevoEventoCerrado: EventoCerrado = new EventoCerrado(nombreEventoCerrado, )
    console.log(this.usuarioOrganizador)
    console.log(this.nombreDelEvento);
    console.log(this.laLocacion);
    console.log(this.fechaInicioEventoCerrado);
    console.log(this.fechaFinEventoCerrado);
    console.log(this.fechaLimiteEvento);
    console.log(this.cantMaximaInvitados);
    console.log(this.horaInicioEventoCerrado);
    console.log(this.horaFinEventoCerrado);
    let fechaLimite = moment(this.fechaLimiteEvento).format('DD/MM/YYYY');
    console.log(this.fechaLimiteEvento);
    let fechaInicio = moment(this.fechaInicioEventoCerrado).format('DD/MM/YYYY');
    let horaInicio = moment(this.horaInicioEventoCerrado).format('HH:mm');
    let fechaInicioFinal = fechaInicio + " " + horaInicio;
    console.log(this.fechaInicioEventoCerrado);
    let fechaFin = moment(this.fechaFinEventoCerrado).format('DD/MM/YYYY');
    let horaFin = moment(this.horaFinEventoCerrado).format('HH:mm');
    let fechaFinFinal = fechaFin + " " + horaFin;
    let nombre = "Felipe no se"
    const prueba = ('{ "nombre": "' + this.nombreDelEvento + '",  "capacidadMaxima": ' + this.cantMaximaInvitados + ', "fechaLimiteConfirmacion": "' + fechaLimite + '", "fechaDeInicio": "' + fechaInicioFinal + '", "fechaFinalizacion": "' + fechaFinFinal + '", "locacionNombre": "' + this.laLocacion + '" }');
    console.log(prueba)
    this.serviceEvento.crearEventoCerrado(prueba);
    //this.router.navigateByUrl('./misEventos/organizados-por-mi');
    this.refrescarPantalla();
  }

}


