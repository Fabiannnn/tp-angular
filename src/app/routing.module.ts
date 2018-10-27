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
import { NgModule } from '@angular/core'

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
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//export const routingComponents = [ TareasComponent, AsignarComponent ]
