import { Routes } from '@angular/router';
import { AgendaComponent } from './agenda/agenda.component';
import { MisEventosComponent } from './mis-eventos/mis-eventos.component';
import { PendientesComponent } from './pendientes/pendientes.component';
import { PerfilComponent } from './perfil/perfil.component';
import { OrganizadosPorMiComponent } from './organizados-por-mi/organizados-por-mi.component';

export const routes: Routes = [
  {path: '', redirectTo: 'misEventos/agenda', pathMatch:'full'},
  {path: 'perfil', component: PerfilComponent},
  {path: 'misEventos', component: MisEventosComponent,
  children:[
    {path: '', redirectTo: 'agenda', pathMatch:'full'},
    {path: 'agenda', component: AgendaComponent},
    {path: 'organizados-por-mi', component: OrganizadosPorMiComponent},
    {path: 'pendientes', component: PendientesComponent},
    {path: '', component: AgendaComponent}
  ]}
];
