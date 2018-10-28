import { Injectable } from '@angular/core';
import { Evento } from '../angularDomain/Evento';
import { Locacion } from '../angularDomain/Locacion';
import { Usuario } from '../angularDomain/Usuario';
import { EventoAbierto } from '../angularDomain/EventoAbierto';
import { EventoCerrado } from '../angularDomain/EventoCerrado';
import { Invitacion } from '../angularDomain/Invitacion';
import { UsuarioFree } from '../angularDomain/UsuarioFree';
import { UsuarioProfesional } from '../angularDomain/UsuarioProfesional';
import { Entrada } from '../angularDomain/Entrada';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ServiceEventoService {
  EVENTOS_CERRADO: Array<EventoCerrado>;
  EVENTOS_ABIERTO: Array<EventoAbierto>;
  Eventos: Array<Evento>;

  constructor() {
    let primerUsuario: Usuario = new Usuario("@Victoria!!!! ", "Usuario Victorioso", "seHace@camino.el.andar", [new Usuario( "@eldelAmigo ", 'Del amigo', "mis_amigos@sodel.amigo", [], 5,new UsuarioFree()), new Usuario( "@elusuarioAmigo ", 'Primer amigo', "mis_amigos@son.unos.laralara", [],6, new UsuarioFree()), new Usuario( "@elOtroAmigo ", 'Otro amigo', "mis_Otros_amigos@son.unos.laralara", [], 5,new UsuarioFree())],1, new UsuarioProfesional())
    let segundoUsuario: Usuario = new Usuario( "Maximo", "Maximo Cozzeti", "todo@sale.bien", [new Usuario( "ElAm34igo", 'De 34', "probando@cozzeti.com", [],4, new UsuarioFree()), new Usuario( "OtroAmigo", 'De Cozzeti', "olala@frances.com", [], 7,new UsuarioFree())],2, new UsuarioProfesional())
    let tercerUsuario: Usuario = new Usuario("ElAmigo", 'De Cozzeti', "probando@cozzeti.com", [primerUsuario,segundoUsuario],3, new UsuarioFree())
    let locacionNueva: Locacion = new Locacion("Pepe el Grillo")
    let eventoCerradoPrueba: EventoCerrado = new EventoCerrado("Prueba", primerUsuario, locacionNueva, new Date(), new Date(), new Date(), 10);
    let primeraInvitacion: Invitacion = new Invitacion(eventoCerradoPrueba, primerUsuario,5);
    eventoCerradoPrueba.agregarInvitacion(primeraInvitacion);
    let segundaInvitacion: Invitacion = new Invitacion(eventoCerradoPrueba, segundoUsuario, 10);
    eventoCerradoPrueba.agregarInvitacion(segundaInvitacion);
    primeraInvitacion.aceptarseCompleto()
    segundaInvitacion.rechazar()

    this.EVENTOS_CERRADO = [
      eventoCerradoPrueba
    ]

    let locacionNueva2: Locacion = new Locacion("Springfields")
    let fechaInicio = new Date()
    fechaInicio.setDate(fechaInicio.getDate() + 5)
    let eventoAbiertoPrueba: EventoAbierto = new EventoAbierto("Algoritmos 3", segundoUsuario, locacionNueva2, fechaInicio, new Date(), new Date(), 18, 50);
    let entrada: Entrada = new Entrada(eventoAbiertoPrueba, primerUsuario)
    let entrada2: Entrada = new Entrada(eventoAbiertoPrueba, tercerUsuario)
    eventoAbiertoPrueba.registrarCompraEnEvento(entrada)
    eventoAbiertoPrueba.registrarCompraEnEvento(entrada2)

    this.EVENTOS_ABIERTO = [
      eventoAbiertoPrueba
    ]

    this.Eventos = [
      eventoCerradoPrueba,
      eventoAbiertoPrueba
    ]
  }
  
    getAgendaHoy(): Array<Evento> {
      return this.Eventos.filter(evento => moment(evento.fechaDeInicio).format('L') === moment().format('L'))
    }
  
    getAgendaSemana(): Array<Evento> {
      return this.Eventos.filter(evento => (moment().format('L') < moment(evento.fechaDeInicio).format('L')) && (moment(evento.fechaDeInicio).format('L') < moment().add(7, 'days').format('L')))
    }
  
    getAgendaProximos(): Array<Evento> {
      return this.Eventos.filter(evento => (moment(evento.fechaDeInicio).format('L')) > moment().add(7, 'days').format('L'))
      }
}
