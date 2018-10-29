import { TipoDeUsuario } from './TipoDeUsuario';
import { Invitacion } from './Invitacion';
import { Entrada } from './Entrada';
import { Point } from './Point';
import{Evento} from './Evento';
//import { serviceUsuarioService } from '../services/serviceUsuario.service';

export class Usuario {
    id: number
    nombreUsuario: String
    nombreApellido: String;
    email: String;
    amigos: Array<Usuario> = new Array<Usuario>();
    tipoDeUsuario: TipoDeUsuario
   /* invitaciones: Array<Invitacion> = new Array<Invitacion>();
    entradaComprada: Array<Entrada> = new Array<Entrada>();
    fechaNacimiento: Date;
    radioDeCercania: number;
    punto: Point;*/
    /*
     esAntisocial: Boolean;
     //= new Array<String>;
     entradaComprada: Array<String>; //creo que deberia ser de eventos
     eventosOrganizados: Array<String>; //Creo que deberia ser de eventos*/
eventosAgenda:Array<Evento>= new Array<Evento>();

    constructor(

        _nombreUsuario: String,
        _nombreApellido: String,
        _email: String,
        _amigos: Array<Usuario>,
            _id: number,
          _tipoDeUsuario?: TipoDeUsuario,
    ) {

        this.nombreUsuario = _nombreUsuario
        this.nombreApellido = _nombreApellido
        this.email = _email
        this.amigos = _amigos  
        this.id = _id
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

    cantidadDeAmigos(): number {
        console.log(this.amigos.length)
        return this.amigos.length
    }

    /*   invitacionesRecibidas(): Array<String> {
        return this.invitaciones
    }*/
 /*
    entradasCompradas(): Array<String> {
        return this.entradaComprada
    }*
  /*  recibirInvitacion(invitacion: Invitacion) {
        this.invitaciones.push(invitacion)
        //agregarMensaje("Fuiste invitado a" + invitacion.unEventoCerrado + ", con " + invitacion.cantidadDeAcompanantes)
    }*/

    edad(): Number {
        return 20 //Period.between(fechaNacimiento, LocalDate.now()).getYears
    }

    static fromJson(usuarioJson){
        let usuarioPerfil= new Usuario(usuarioJson.nombreUsuario, usuarioJson.nombreApellido, usuarioJson.email, usuarioJson.amigos,  usuarioJson.id, usuarioJson.tipoDeUsuario)
    return usuarioPerfil
    }
}
