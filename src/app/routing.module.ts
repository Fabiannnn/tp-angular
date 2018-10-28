import { Routes, RouterModule } from '@angular/router';
import { AgendaComponent } from './agenda/agenda.component';
import { MisEventosComponent } from './mis-eventos/mis-eventos.component';
import { PendientesComponent } from './pendientes/pendientes.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RefreshComponent } from '././refresh/refresh.component';
import { OrganizadosPorMiComponent } from './organizados-por-mi/organizados-por-mi.component';
import { NgModule } from '@angular/core'

export const routes: Routes = [
  {path: '', redirectTo: 'misEventos/agenda', pathMatch:'full'},
  {path: 'perfil', component: PerfilComponent},
  {path: 'refresh', component: RefreshComponent},
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
