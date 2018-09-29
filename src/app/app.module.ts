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
import { NotFoundComponent } from './not-found/not-found.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    AgendaComponent,
    MisEventosComponent,
    NuevoAbiertoComponent,
    NuevoCerradoComponent,
    PendientesComponent,
    PerfilComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
    { 
      path: '',
      component: SidebarComponent
    },
    { 
      path: 'agenda',
      component: AgendaComponent
    },
    { 
      path: 'sidebar',
      component: SidebarComponent
    },
    { 
      path: 'mis-eventos',
      component: MisEventosComponent
    },
    { 
      path: 'nuevo-abierto',
      component: NuevoAbiertoComponent
    },
    { 
      path: 'nuevo-cerrado',
      component: NuevoCerradoComponent
    },
    { 
      path: 'pendientes',
      component: PendientesComponent
    },
    { 
      path: 'perfil',
      component: PerfilComponent
    },
    { 
      path: '**',
      component: NotFoundComponent
    }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
