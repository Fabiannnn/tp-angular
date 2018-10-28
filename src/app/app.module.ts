
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AgendaComponent } from './agenda/agenda.component';
import { MisEventosComponent } from './mis-eventos/mis-eventos.component';
import { PendientesComponent } from './pendientes/pendientes.component';
import { PerfilComponent } from './perfil/perfil.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { routes } from './routing.module';
import { OrganizadosPorMiComponent } from './organizados-por-mi/organizados-por-mi.component';
import { TablaCerradosComponent } from './tabla-cerrados/tabla-cerrados.component';
import { TablaAbiertosComponent } from './tabla-abiertos/tabla-abiertos.component';
import { RefreshComponent } from './refresh/refresh.component';
import{HttpModule} from '@angular/http';

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
      TablaAbiertosComponent,
      RefreshComponent,
   
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(routes),
      HttpModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }