import { Usuario } from './Usuario';

export interface TipoDeUsuario {
    puedeOrganizarEventoAbierto(unOrganizador: Usuario): Boolean
    puedeOrganizarEventoCerrado(unOrganizador: Usuario): Boolean
    categoria(): String
}
