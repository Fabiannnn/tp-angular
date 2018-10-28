
import { TipoDeUsuario } from '../angularDomain/TipoDeUsuario';
import { Usuario } from './Usuario';

export class UsuarioProfesional implements TipoDeUsuario {


    
    categoria(): String {
        return "Profesional"
    }
    puedeOrganizarEventoAbierto(unOrganizador: Usuario): Boolean { return true }
    puedeOrganizarEventoCerrado(unOrganizador: Usuario): Boolean { return true }

}
