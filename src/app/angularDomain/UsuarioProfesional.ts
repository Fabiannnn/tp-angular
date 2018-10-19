
import { TipoDeUsuario} from './TipoDeUsuario';
import { Usuario} from './Usuario';

export class UsuarioProfesional implements TipoDeUsuario {
    tipoDeUsuarioNom(): String {
        return "Profesional"
    }
    puedeOrganizarEventoAbierto(unOrganizador: Usuario): Boolean { return true }
    puedeOrganizarEventoCerrado(unOrganizador: Usuario): Boolean { return true }

}
