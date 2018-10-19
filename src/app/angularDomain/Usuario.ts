import { TipoDeUsuario } from './TipoDeUsuario';

export class Usuario {
    id: number
    nombreUsuario: String
    nombreApellido: String;
    email: String;
    amigos: Array<Usuario>;
    tipoDeUsuario: TipoDeUsuario
    /* 
     fechaNacimiento: Date;
     esAntisocial: Boolean;
     radioDeCercania: number;
     invitaciones:Array<String>; 
     //= new Array<String>;
     entradaComprada: Array<String>; //creo que deberia ser de eventos
     eventosOrganizados: Array<String>; //Creo que deberia ser de eventos*/

    constructor(_id: number,
        _nombreUsuario: String,
        _nombreApellido: String,
        _email: String,
        _amigos: Array<Usuario>,
     //   _tipoDeUsuario: TipoDeUsuario
    ) {
        this.id = _id
        this.nombreUsuario = _nombreUsuario
        this.nombreApellido = _nombreApellido
        this.email = _email
        this.amigos = _amigos
     //   this.tipoDeUsuario = _tipoDeUsuario

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

    /*   cantidadDeAmigos(): number {
           return this.amigos.length
       }
   
       invitacionesRecibidas(): Array<String> {
           return this.invitaciones
       }
   
       entradasCompradas(): Array<String> {
           return this.entradaComprada
       }*/


}
