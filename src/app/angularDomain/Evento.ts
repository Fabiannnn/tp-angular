import { Usuario } from "./Usuario";
import { Locacion } from "./Locacion";

export abstract class Evento {

    nombre: String;
    organizador: Usuario;
    fechaDeInicio: Date;
    fechaFinalizacion: Date;
    locacion: Locacion;
    fechaLimiteConfirmacion: Date;
    artistas: Array<String> = [];
    cancelado: Boolean;
    postergado: Boolean;

    abstract esUnFracaso(): void;
    abstract capacidadMaxima(): Number;
    abstract cancelarEvento(): void;
    abstract esExitoso(): Boolean;
    //abstract ejecutarOrdenesDeInvitacion(): void;
    abstract cantidadAsistentes(): Number;

    duracion(): Number {
        return 0
        //return Duration.between(this.fechaDeInicio, this.fechaFinalizacion).getSeconds() / 3600;
    }

    fechaAnteriorALaLimite(): Boolean {
        return true
        //return LocalDate.now() <= LocalDate.from(this.fechaLimiteConfirmacion);
    }

    postergarElEvento(nuevaFechaHoraInicio: Date): void {
        this.postergado = true;
        this.cambiarFechasEvento(nuevaFechaHoraInicio);
    }
    //Mepa que debería ser void.
    cambiarFechasEvento(nuevaFechaHoraInicio: Date): void {
        var difTiempo = this.calcularDiferenciaTiempo(nuevaFechaHoraInicio);
        //this.fechaDeInicio.plusHours(difTiempo);
        //this.fechaFinalizacion.plusHours(difTiempo);
        //this.fechaLimiteConfirmacion.plusDays((difTiempo / 24) as Number);
    }

    calcularDiferenciaTiempo(nuevaFechaHoraInicio: Date): Number {
        return 0
        //return Duration.between(this.fechaDeInicio, nuevaFechaHoraInicio).toHours();
    }

    validarDatosEvento(): Boolean {
        return this.validarDatosCompletos() && this.validarFechas();
    }

    validarFechas(): Boolean {
        /*
        if (!((this.fechaLimiteConfirmacion < LocalDate.from(this.fechaDeInicio)) && (this.fechaDeInicio < this.fechaFinalizacion))) {
            throw "Fechas del evento Inconsistentes";
        } else {
            return true;
        }
        */
        return true
    }

    validarDatosCompletos(): Boolean {
        if ((this.nombre == null || this.fechaDeInicio == null || this.fechaFinalizacion == null || this.fechaLimiteConfirmacion == null //|| this.locacion == null
        )) {
            throw "Faltan Datos en el Evento";
        } else { return true }
    }

    abstract usuariosCercanosAlEvento(usuario: Usuario): Boolean

    toString(): String {
        return this.nombre
    }

    constructor(unNombre: string, unOrganizador: Usuario, unaLocacion: Locacion, fechaInicio: Date, fechaFinal: Date, fechaLimite: Date) {
        this.nombre = unNombre
        this.organizador = unOrganizador
        this.locacion = unaLocacion
        this.fechaDeInicio = fechaInicio
        this.fechaFinalizacion = fechaFinal
        this.fechaLimiteConfirmacion = fechaLimite
    }
}