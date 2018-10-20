import { Usuario } from "./Usuario";
import { Evento } from "./Evento";
import { Invitacion } from "./Invitacion";
import { Locacion } from "./Locacion";

export class EventoCerrado extends Evento {

    //static val COEF_EXITO = 0.9
    invitados: Array<Invitacion> = new Array<Invitacion>();
    //Set<Invitacion> invitados = newHashSet
    unaCapacidadMaxima: number;
    //int capacidadMaxima = 0

    crearInvitacion(elInvitado: Usuario, unaCantidadDeAcompanantes: number): void {
        if (this.hayCapacidadDisponible(unaCantidadDeAcompanantes + 1) && this.fechaAnteriorALaLimite()) {
            let nuevaInvitacion = new Invitacion(this, elInvitado, unaCantidadDeAcompanantes)
            this.registrarInvitacionEnEvento(nuevaInvitacion)
            this.registrarInvitacionEnUsuario(nuevaInvitacion, elInvitado)
        } else {
            throw "No se puede generar la invitacion"
        }
    }

    getInvitadosDelEvento(): Array<Invitacion> {
        //this.invitados.map[unUsuario].toList
        return this.invitados;
    }

    hayCapacidadDisponible(unaCantidadTotal: Number): Boolean {
        return unaCantidadTotal <= (this.capacidadMaxima() - this.cantidadAsistentes())
    }

    registrarInvitacionEnEvento(nuevaInvitacion: Invitacion): void {
        this.invitados.push(nuevaInvitacion)
    }

    registrarInvitacionEnUsuario(nuevaInvitacion: Invitacion, elInvitado: Usuario): void {
        elInvitado.recibirInvitacion(nuevaInvitacion)
    }

    cantidadAsistentes(): number {
        return 0
        //return this.invitados.fold(0)[acum, invitados | acum + invitados.posiblesAsistentes()]
    }

    cantidadDeInvitaciones(): Number {
        return this.invitados.length
    }

    cancelarEvento(): void {
        this.cancelado = true;
        this.notificarAInvitadosCancelacion();
    }

    capacidadMaxima(): number {
        return this.unaCapacidadMaxima
    }

    notificarAInvitadosCancelacion(): void {
        //this.invitados.filter[invitados | invitados.aceptada != false].forall[invitacion | invitacion.notificacionDeCancelacion()]
    }

    postergarElEvento(nuevaFechaHoraInicio: Date): void {
        super.postergarElEvento(nuevaFechaHoraInicio)
        //this.invitados.forall[invitacion | invitacion.NotificacionDePostergacion(fechaDeInicio, fechaFinalizacion, fechaLimiteConfirmacion)]
    }

    esExitoso(): Boolean {
        return !this.cancelado && this.asistenciaExitosa()
    }

    asistenciaExitosa(): Boolean {
        if (!(this.invitados.length == 0)) {
            return ((this.invitacionesAceptadas() * 100) / this.invitados.length >= 90)
        }
        else { return false }
    }

    esUnFracaso(): Boolean {
        return true
        //return !this.cancelado && LocalDateTime.now().isAfter(this.fechaFinalizacion) && asistenciaFracaso()
    }

    asistenciaFracaso(): Boolean {
        /*
        if (!(this.invitados.length == 0)) {
            return this.invitados.filter[invitacion | invitacion.aceptada !== false].size() / this.invitados.length < 0.5
        }
        else { return false }
        */
       return true
    }

    usuariosCercanosAlEvento(usuario: Usuario): Boolean {
        throw "No se puede notificar al usuario."
    }

    invitacionesAceptadas(): number {
        let invitacionesAceptadas: number = 0
        this.invitados.forEach(element => {
            if (element.invitacionesAceptadas()) {
                invitacionesAceptadas = invitacionesAceptadas + 1
            }
        });
        return invitacionesAceptadas
    }

    //Prueba
    agregarInvitacion(unaInvitacion: Invitacion): void {
        this.invitados.push(unaInvitacion)
    }
    
    constructor(unNombre: string, unOrganizador: Usuario, unaLocacion: Locacion, fechaInicio: Date, fechaFinal: Date, fechaLimite: Date, capacidad: number) {
        super(unNombre, unOrganizador, unaLocacion, fechaInicio, fechaFinal, fechaLimite)
        this.unaCapacidadMaxima = capacidad;
    }
}
