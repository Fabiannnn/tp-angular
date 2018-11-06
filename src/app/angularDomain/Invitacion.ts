export class Invitacion {
	unEventoCerrado: String
	unUsuario: String
	cantidadDeAcompanantes: number
	aceptada: Boolean
	fechaDeInicio: String
	cantidadDeAcompanantesConfirmados: number = 0
	lugarDelEvento: String

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
	//FP Modifique el orden en el constructor.
	constructor(cantidadDeAcompanantes?: number, aceptada?: Boolean, cantidadDeAcompanantesConfirmados?: number, elEventoCerrado?: String, elUsuario?: String, lugarDelEvento?: String, fechaDeInicio?: String) {
		this.cantidadDeAcompanantes = cantidadDeAcompanantes
		this.aceptada = aceptada
		this.cantidadDeAcompanantesConfirmados = cantidadDeAcompanantesConfirmados
		this.unEventoCerrado = elEventoCerrado
		this.unUsuario = elUsuario
		this.lugarDelEvento = lugarDelEvento
		this.fechaDeInicio = fechaDeInicio
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