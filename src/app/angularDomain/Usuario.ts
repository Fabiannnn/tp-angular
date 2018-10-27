import { TipoDeUsuario } from './TipoDeUsuario';
import { Invitacion } from './Invitacion';
import { Entrada } from './Entrada';
import { Point } from './Point';
//import { serviceUsuarioService } from '../services/serviceUsuario.service';

export class Usuario {
    id: String
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

    constructor(
        _nombreUsuario: String,
        _nombreApellido: String,
        _email: String,
        _amigos: Array<Usuario>,
            _id: String,
          _tipoDeUsuario?: TipoDeUsuario,
    ) {

        this.nombreUsuario = _nombreUsuario
        this.nombreApellido = _nombreApellido
        this.email = _email
        this.amigos = _amigos  
        this.id = _id
         this.tipoDeUsuario = _tipoDeUsuario
    }
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
    }
 
    entradasCompradas(): Array<String> {
        return this.entradaComprada
    }*/
  /*  recibirInvitacion(invitacion: Invitacion) {
        this.invitaciones.push(invitacion)
        //agregarMensaje("Fuiste invitado a" + invitacion.unEventoCerrado + ", con " + invitacion.cantidadDeAcompanantes)
    }*/

    edad(): Number {
        return 20 //Period.between(fechaNacimiento, LocalDate.now()).getYears
    }

    /* 
     static fromJson(usuJson) {
        console.log("usuJson")
        let usuario1 = new usu(usuJson.id, usuJson.nombreUsuario, usuJson.nombreApellido, usuJson.email, usuJson.amigos)
        console.log(usuario1)
        console.log("en usu from json"+ usuario1)
        return usuario1
      
    }*/


   static fromJson(usuarioJson){
           console.log("usuarioJson de usuario" + usuarioJson)
           console.log("tipoUsuario"+usuarioJson.tipoDeUsuario.nom)
           let usuarioPerfil= new Usuario(usuarioJson.nombreUsuario, usuarioJson.nombreApellido, usuarioJson.email, usuarioJson.amigos,  usuarioJson.id, usuarioJson.tipoDeUsuario)
       return usuarioPerfil
       }
}