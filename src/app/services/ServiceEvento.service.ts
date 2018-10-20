import { Injectable } from '@angular/core';
import { Evento } from '../angularDomain/Evento';
import { Point } from '../angularDomain/Point';
import { Locacion } from '../angularDomain/Locacion';
import { Usuario } from '../angularDomain/Usuario';
import { EventoAbierto } from '../angularDomain/EventoAbierto';
import { EventoCerrado } from '../angularDomain/EventoCerrado';
import { Invitacion } from '../angularDomain/Invitacion';
import { TipoDeUsuario } from '../angularDomain/TipoDeUsuario';
import { UsuarioFree } from '../angularDomain/UsuarioFree';
import { UsuarioProfesional } from '../angularDomain/UsuarioProfesional';

@Injectable({
  providedIn: 'root'
})
export class ServiceEventoService {
  public static EVENTOS: Array<Evento> = new Array<Evento>();

  obtenerEventosAbiertos(): void {
    let primerUsuario: Usuario =  new Usuario(1, "@Victoria!!!! ", "Usuario Victorioso", "seHace@camino.el.andar", [new Usuario(3, "@eldelAmigo ", 'Del amigo', "mis_amigos@sodel.amigo", [], new UsuarioFree()),new Usuario(4, "@elusuarioAmigo ", 'Primer amigo', "mis_amigos@son.unos.laralara", [], new UsuarioFree()), new Usuario(5, "@elOtroAmigo ", 'Otro amigo', "mis_Otros_amigos@son.unos.laralara", [], new UsuarioFree())], new UsuarioProfesional())
    let segundoUsuario: Usuario =  new Usuario(6, "Maximo", "Maximo Cozzeti", "todo@sale.bien", [new Usuario(7, "ElAmigo", 'De Cozzeti', "probando@cozzeti.com", [], new UsuarioFree()),new Usuario(8, "OtroAmigo", 'De Cozzeti', "olala@frances.com", [], new UsuarioFree())], new UsuarioProfesional())
    let locacionNueva: Locacion = new Locacion("Pepe el Grillo")
    let fechaInicial = new Date()
    let eventoCerradoPrueba: EventoCerrado = new EventoCerrado("Prueba", primerUsuario, locacionNueva, fechaInicial, new Date(), new Date(), 10);
    let primeraInvitacion: Invitacion = new Invitacion(eventoCerradoPrueba, primerUsuario, 5);
    eventoCerradoPrueba.agregarInvitacion(primeraInvitacion);
    let segundaInvitacion: Invitacion = new Invitacion(eventoCerradoPrueba, segundoUsuario, 10);
    eventoCerradoPrueba.agregarInvitacion(segundaInvitacion);
    primeraInvitacion.aceptarseCompleto()
    segundaInvitacion.rechazar()
    ServiceEventoService.EVENTOS.push(eventoCerradoPrueba)
  }

  constructor() { }

}
