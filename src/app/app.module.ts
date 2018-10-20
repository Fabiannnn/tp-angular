import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AgendaComponent } from './agenda/agenda.component';
import { MisEventosComponent } from './mis-eventos/mis-eventos.component';
import { NuevoAbiertoComponent } from './nuevo-abierto/nuevo-abierto.component';
import { NuevoCerradoComponent } from './nuevo-cerrado/nuevo-cerrado.component';
import { PendientesComponent } from './pendientes/pendientes.component';
import { PerfilComponent } from './perfil/perfil.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { routes } from './routing.module';
import { OrganizadosPorMiComponent } from './organizados-por-mi/organizados-por-mi.component';
import { TablaCerradosComponent } from './tabla-cerrados/tabla-cerrados.component';
import { TablaAbiertosComponent } from './tabla-abiertos/tabla-abiertos.component';

@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      MisEventosComponent,
      PerfilComponent,
      AgendaComponent,
      OrganizadosPorMiComponent,
      PendientesComponent,
      SidebarComponent,
      NotFoundComponent,
      TablaCerradosComponent,
      TablaAbiertosComponent
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(routes)
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
