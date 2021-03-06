
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
import { ContadorComponent } from './contador/contador.component';
import { HttpModule } from '@angular/http';
/** Imports de Material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule } from '@angular/material';
import{ MatTooltipModule} from '@angular/material/tooltip';

import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import * as moment from 'moment';
import {defineLocale, esLocale} from 'ngx-bootstrap';
import { CrearEventoCerradoComponent } from './crear-evento-cerrado/crear-evento-cerrado.component';
import { FormsModule } from '@angular/forms';
import { CrearEventoAbiertoComponent } from './crear-evento-abierto/crear-evento-abierto.component';
import { Agenda2Component } from './agenda2/agenda2.component';

defineLocale('es', esLocale)

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
      ContadorComponent,
      CrearEventoCerradoComponent,
      CrearEventoAbiertoComponent,
      Agenda2Component
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(routes),
      HttpModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatCardModule,
      MatTooltipModule,
      BrowserAnimationsModule,
      ModalModule.forRoot(),
      BsDatepickerModule.forRoot(),
      TimepickerModule.forRoot(),
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }