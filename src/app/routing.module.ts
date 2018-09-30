import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AgendaComponent } from './agenda/agenda.component';
import { MisEventosComponent } from './mis-eventos/mis-eventos.component';
import { NuevoAbiertoComponent } from './nuevo-abierto/nuevo-abierto.component';
import { NuevoCerradoComponent } from './nuevo-cerrado/nuevo-cerrado.component';
import { PendientesComponent } from './pendientes/pendientes.component';
import { PerfilComponent } from './perfil/perfil.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OrganizadosPorMiComponent } from './organizados-por-mi/organizados-por-mi.component';

export const routes: Routes = [
    {path: '', component: NavbarComponent, 
    children:[
      {path: 'perfil', component: PerfilComponent},
      {path: 'misEventos', component: MisEventosComponent,
        children:[
          {path: 'misEventos/agenda', component: AgendaComponent},
          {path: 'misEventos/organizados-por-mi', component: OrganizadosPorMiComponent},
          {path: 'misEventos/pendientes', component: PendientesComponent},
        ]},
      
    ]}
]
