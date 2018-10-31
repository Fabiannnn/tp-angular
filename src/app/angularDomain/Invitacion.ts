import { EventoCerrado } from "./EventoCerrado";
import { Usuario } from "./Usuario";

export class Invitacion {
	unEventoCerrado: String
	unUsuario: String
	cantidadDeAcompanantes: number
	aceptada: Boolean
	fechaDeInicio: String
	cantidadDeAcompanantesConfirmados: number = 0
	lugarDelEvento:String

	static fromJson(invitacionJson) {
		let invitacion = new Invitacion(
			invitacionJson.cantidadDeAcompanantes,
			invitacionJson.aceptada,
			invitacionJson.cantidadDeAcompanantesConfirmados,
			invitacionJson.fechaDeInicio,
			invitacionJson.unUsuario,
			invitacionJson.lugarDelEvento,
			invitacionJson.unEventoCerrado)

		return invitacion
	}

	constructor(cantidadDeAcompanantes?: number, aceptada?: Boolean, cantidadDeAcompanantesConfirmados?: number, fechaDeInicio?: String, elUsuario?: String, lugarDelEvento?:String, elEventoCerrado?: String) {
		this.cantidadDeAcompanantes = cantidadDeAcompanantes
		this.aceptada = aceptada
		this.cantidadDeAcompanantesConfirmados = cantidadDeAcompanantesConfirmados
		this.fechaDeInicio = fechaDeInicio
		this.unUsuario = elUsuario
		this.lugarDelEvento=lugarDelEvento
		this.unEventoCerrado = elEventoCerrado

	}

	estadoInvitacion(): Boolean {
		return this.aceptada
	}

	nombreEvento() {
		return this.unEventoCerrado
	}


}
/*	estaAceptada(): void {
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
	 */