import { EventoAbierto } from "./EventoAbierto";
import { Usuario } from "./Usuario";

export class Entrada {
    unEventoAbierto: EventoAbierto;
    unUsuario: Usuario;

    constructor(elEventoAbierto: EventoAbierto, elUsuario: Usuario) {
        this.unEventoAbierto = elEventoAbierto
        this.unUsuario = elUsuario
    }
}
