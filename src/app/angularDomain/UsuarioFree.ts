import { TipoDeUsuario } from "./TipoDeUsuario";
import { Usuario } from "./Usuario";
export class UsuarioFree implements TipoDeUsuario {
    categoria(): String {        return "Free"    }
    puedeOrganizarEventoAbierto(unOrganizador: Usuario): Boolean { return false }
    puedeOrganizarEventoCerrado(unOrganizador: Usuario): Boolean { return true }

}