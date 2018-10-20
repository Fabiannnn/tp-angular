import { EventoCerrado } from "./EventoCerrado";
import { Usuario } from "./Usuario";

export class Invitacion {
    unEventoCerrado: EventoCerrado
	unUsuario: Usuario 
	cantidadDeAcompanantes: number 
	aceptada: Boolean
	cantidadDeAcompanantesConfirmados: number = 0

	constructor(elEventoCerrado: EventoCerrado, elUsuario: Usuario, laCantidadDeAcompanantes: number) {
		this.unEventoCerrado = elEventoCerrado
		this.unUsuario = elUsuario
		this.cantidadDeAcompanantes = laCantidadDeAcompanantes
	}
}
