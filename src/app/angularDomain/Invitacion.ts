import { EventoCerrado } from "./EventoCerrado";
import { Usuario } from "./Usuario";

export class Invitacion {
	unEventoCerrado: EventoCerrado
	unUsuario: Usuario
	cantidadDeAcompanantes: number
	aceptada: Boolean
	cantidadDeAcompanantesConfirmados: number = 0

	estaAceptada(): void {
		this.aceptada = true
	}

	aceptarseCompleto(): void {
		this.aceptada = true
		this.cantidadDeAcompanantesConfirmados = this.cantidadDeAcompanantes
	}

	aceptar(unaCantidadDeAcompanantes: number): void {
		this.aceptada = true
		this.cantidadDeAcompanantesConfirmados = unaCantidadDeAcompanantes
	}

	rechazar(): void {
		this.aceptada = false
	}

	estadoInvitacion(): Boolean {
		return this.aceptada
	}

	constructor(elEventoCerrado: EventoCerrado, elUsuario: Usuario, laCantidadDeAcompanantes: number) {
		this.unEventoCerrado = elEventoCerrado
		this.unUsuario = elUsuario
		this.cantidadDeAcompanantes = laCantidadDeAcompanantes
	}
}
