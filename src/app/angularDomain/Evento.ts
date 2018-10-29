import { Usuario } from "./Usuario";
import { Locacion } from "./Locacion";
import * as moment from 'moment';


export class Evento {

    nombre: String;
    organizador: String;
    fechaDeInicio: String;
  //  fechaFinalizacion: String;
    locacion: String;
    fechaLimiteConfirmacion: String;
    edadMinima: number;
   precioEntrada: number;
   // artistas: Array<String> = [];
    cancelado: Boolean;
   postergado: Boolean;

    constructor(nombre?, edadMinima?, precioEntrada?, fechaLimiteConfirmacion?, fechaDeInicio?, locacionNombre?, usuarioOrganizador?) {
        this.nombre = nombre
        this.edadMinima=edadMinima
        this.precioEntrada=precioEntrada
        this.fechaLimiteConfirmacion = fechaLimiteConfirmacion
        this.fechaDeInicio = fechaDeInicio
        this.locacion = locacionNombre
        this.organizador = usuarioOrganizador

    }
    static fromJson(eventoJson){
        let eventoAgenda = new Evento(eventoJson.nombre, eventoJson.EdadMinima, eventoJson.precioEntrada,
            eventoJson.fechaLimiteConfirmacion,  eventoJson.fechaDeInicio, eventoJson.locacionNombre, eventoJson.usuarioOrganizador)
            console.log("de static fromJson manual"+ eventoJson)
            return eventoAgenda
    }
    
    toJSON(): any {
        const result: any = Object.assign({}, this);
        result.fechaDeInicio = moment().format("YYYY/MM/DD HH:mm")
        result.fechaLimiteConfirmacion = moment().format("YYYY/MM/DD HH:mm")
    
        return result;
    }

    static fromJSON(eventoJSON) {
        const result: Evento = Object.assign(new Evento(), eventoJSON);
        console.log(result)
        return result;
    }
    
}

/*
    calcularDiferenciaTiempo(nuevaFechaHoraInicio: Date): Number {
        return 0
        //return Duration.between(this.fechaDeInicio, nuevaFechaHoraInicio).toHours();
    }

  
    validarFechas(): Boolean {
        /*
        if (!((this.fechaLimiteConfirmacion < LocalDate.from(this.fechaDeInicio)) && (this.fechaDeInicio < this.fechaFinalizacion))) {
            throw "Fechas del evento Inconsistentes";
        } else {
            return true;
        }
        
        return true
    }

    validarDatosCompletos(): Boolean {
        if ((this.nombre == null || this.fechaDeInicio == null || this.fechaFinalizacion == null || this.fechaLimiteConfirmacion == null //|| this.locacion == null
        )) {
            throw "Faltan Datos en el Evento";
        } else { return true }
    }


    //Cosas agregadas o usadas para typescript.
    nombreLocacion(): String {
        return this.locacion.nombre
    }

    nombreOrganizador(): String {
        return this.organizador.nombreApellido   }

        this.nombre = unNombre
          this.locacion= unaLocacion 
          this.fechaLimiteConfirmacion= fechaLimite
       this.organizador= unOrganizador
   
        this.fechaDeInicio= fechaInicio
        this.fechaFinalizacion= fechaFinal
 
    }

    static fromJSON(eventoJSON) {
        const result: Evento = Object.assign(new Evento( ), eventoJSON);
console.log(result);
        return result;
      }
 */
