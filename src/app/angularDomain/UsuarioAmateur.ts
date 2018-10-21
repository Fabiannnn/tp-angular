
import { TipoDeUsuario } from './TipoDeUsuario';
import { Usuario } from './Usuario';

export class UsuarioAmateur implements TipoDeUsuario {
    categoria(): String {
        return "Amateur"
    }
    puedeOrganizarEventoAbierto(unOrganizador: Usuario): Boolean { return false }
    puedeOrganizarEventoCerrado(unOrganizador: Usuario): Boolean { return true }

}
