import { TipoDeUsuario } from './TipoDeUsuario';
import { Invitacion } from './Invitacion';
import { Entrada } from './Entrada';
import { Point } from './Point';

export class Usuario {
    id: number
    nombreUsuario: String
    nombreApellido: String;
    email: String;
    amigos: Array<Usuario>;
    tipoDeUsuario: TipoDeUsuario
    invitaciones: Array<Invitacion>;
    entradaComprada: Array<Entrada>;
    fechaNacimiento: Date;
    radioDeCercania: number;
    punto: Point;
    /*
     esAntisocial: Boolean;
     //= new Array<String>;
     entradaComprada: Array<String>; //creo que deberia ser de eventos
     eventosOrganizados: Array<String>; //Creo que deberia ser de eventos*/

    constructor(_id: number,
        _nombreUsuario: String,
        _nombreApellido: String,
        _email: String,
        _amigos: Array<Usuario>,
        _tipoDeUsuario: TipoDeUsuario
    ) {
        this.id = _id
        this.nombreUsuario = _nombreUsuario
        this.nombreApellido = _nombreApellido
        this.email = _email
        this.amigos = _amigos
        this.tipoDeUsuario = _tipoDeUsuario
    }
    //Constructor para repositorio de prueba.

    /*    nombreApellido?: String,
      email?: String,
       fechaNacimiento?: Date,
       esAntisocial?: Boolean,
       amigos?: Array<Usuario>,
       radioDeCercania?: number,
       invitaciones?: Array<String>,
       entradaComprada?: Array<String>, 
       eventosOrganizados?: Array<String>
       ) { }*/

    /*   cantidadDeAmigos(): number {
           return this.amigos.length
       }
   
       invitacionesRecibidas(): Array<String> {
           return this.invitaciones
       }
   
       entradasCompradas(): Array<String> {
           return this.entradaComprada
       }*/
    recibirInvitacion(invitacion: Invitacion) {
        this.invitaciones.push(invitacion)
        //agregarMensaje("Fuiste invitado a" + invitacion.unEventoCerrado + ", con " + invitacion.cantidadDeAcompanantes)
    }

    edad(): Number {
        return 20 //Period.between(fechaNacimiento, LocalDate.now()).getYears
    }

    miNombre(): String {
        return this.nombreApellido
    }

}
