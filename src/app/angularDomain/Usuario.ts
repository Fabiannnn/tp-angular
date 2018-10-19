import { TipoDeUsuario} from './TipoDeUsuario';
export class Usuario {
    id: number;
    nombreUsuario: String;
    nombreApellido: String;
    email: String;
    fechaNacimiento: Date;
    esAntisocial: Boolean;
    amigos: Array<Usuario>;
    radioDeCercania: number;
    invitaciones:Array<String>; 
    //= new Array<String>;
    entradaComprada: Array<String>; //creo que deberia ser de eventos
    tipoDeUsuario: TipoDeUsuario
    eventosOrganizados: Array<String>; //Creo que deberia ser de eventos

    constructor(id: number, nombreUsuario: String, 
        nombreApellido?: String,
        email?: String,
        fechaNacimiento?: Date,
        esAntisocial?: Boolean,
        amigos?: Array<Usuario>,
        radioDeCercania?: number,
        invitaciones?: Array<String>,
        entradaComprada?: Array<String>, 
        eventosOrganizados?: Array<String>
        ) { }

    cantidadDeAmigos(): number {
        return this.amigos.length
    }

    invitacionesRecibidas(): Array<String> {
        return this.invitaciones
    }

    entradasCompradas(): Array<String> {
        return this.entradaComprada
    }


}
