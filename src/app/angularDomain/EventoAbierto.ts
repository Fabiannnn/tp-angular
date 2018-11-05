import { Evento } from "./Evento";
import { Entrada } from "./Entrada";
import { Usuario } from "./Usuario";
import { Locacion } from "./Locacion";

export class EventoAbierto extends Evento {

    edadMinima: number;
    precioEntrada: number;
    //FP
    entradas: Array<Entrada> = new Array<Entrada>();

    //Cosas que usamos y agregamos para typescript.
    registrarCompraEnEvento(nuevaEntrada: Entrada): void {
        this.entradas.push(nuevaEntrada)
    }

    entradasVendidas(): number {
        return this.entradas.length
    }

    cancelarEvento(): void {
        this.cancelado = true
    }
    //FP Creamos el EventoAbierto del Json.
    static crearEventofromJson(eventoJson) {
        return new EventoAbierto(eventoJson.nombre, eventoJson.fechaLimiteConfirmacion, eventoJson.fechaDeInicio, eventoJson.locacionNombre, eventoJson.usuarioOrganizador,  eventoJson.edadMinima, eventoJson.precioEntrada, eventoJson.entradas)
    }
    //FP
    constructor(unNombre: string, fechaLimite: Date, fechaInicio: Date, unaLocacion: Locacion, unOrganizador: Usuario, unaEdadMinima: number, unPrecio: number, entradasVendidas: Array<Entrada>) {
        super(unNombre, fechaLimite, fechaInicio, unaLocacion, unOrganizador)
        this.edadMinima = unaEdadMinima;
        this.precioEntrada = unPrecio;
        this.entradas = entradasVendidas;
    }
    /*
        comprarEntrada(elComprador: Usuario): void {
            this.puedeComprarEntrada(elComprador)
            this.generarEntrada(elComprador)
        }*/
    /*
        ejecutarOrdenesDeInvitacion(): void {
            throw "Un EventoAbierto no puede ejecutar ordenes de Invitacion"
        }*/

    /*  puedeComprarEntrada(elComprador: Usuario): void {
          if (!this.edadValida(elComprador) || !this.fechaAnteriorALaLimite() || !this.hayEntradasDisponibles()) {
              throw "No se puede Comprar la Entrada"
          }
      }
  
      edadValida(elComprador: Usuario): Boolean {
          return elComprador.edad() > this.edadMinima
      }
      */
    //Me parece que es void.
    /*   
    generarEntrada(elComprador: Usuario): void {
        //let nuevaEntrada
        var nuevaEntrada = new Entrada(this, elComprador)
        this.registrarCompraEnEvento(nuevaEntrada)
        this.registrarCompraEnUsuario(nuevaEntrada, elComprador)
    }
    registrarCompraEnUsuario(nuevaEntrada: Entrada, elComprador: Usuario): void {
        elComprador.entradaComprada.push(nuevaEntrada)
    }*/

    /*postergarElEvento(nuevaFechaHoraInicio: Date): void {
        super.postergarElEvento(nuevaFechaHoraInicio)
        //this.entradas.forall[invitacion | invitacion.mensajesPorPostergacion(this.fechaDeInicio, this.fechaFinalizacion, this.fechaLimiteConfirmacion)]
    }*/

    /*capacidadMaxima(): number {
        return this.locacion.capacidadMaxima()
    }*/
    /*
        hayEntradasDisponibles(): Boolean {
            return this.entradas.length < this.capacidadMaxima()
        }
    
        fechaAnteriorALaLimite(): Boolean {
            return true//return LocalDate.now() <= LocalDate.from(this.fechaLimiteConfirmacion)
        }
    
        esExitoso(): Boolean {
            return !this.cancelado && !this.postergado && this.ventaExitosa()
        }
    
        ventaExitosa(): Boolean {
            if (!(this.entradas.length == 0)) {
                return ((this.cantidadAsistentes() * 100) / this.entradas.length) >= 90
            }
            else { return false }
        }
    
        esUnFracaso(): Boolean {
            return this.cantidadAsistentes() / this.capacidadMaxima() < 0.5
        }
    
        cantidadAsistentes(): number {
            return 1;
            //return this.entradas.filter[entradas | entradas.vigente === true].size()
        }
    
        usuariosCercanosAlEvento(usuario: Usuario): Boolean {
            return true/* this.locacion.estaDentroDelRadioDeCercania(usuario)*/
    //}
}