import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MedicoComponent } from './medico/medico.component';
import { PacienteComponent } from './paciente/paciente.component';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { AgendaService } from './agenda.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'medicos', component: MedicoComponent },
      { path: 'pacientes', component: PacienteComponent },
      { path: 'agendamentos', component: AgendamentoComponent },
    ]),
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent,
    NavbarComponent,
    HomeComponent,
    MedicoComponent,
    PacienteComponent,
    AgendamentoComponent ],
    
  bootstrap:    [ AppComponent ],
  providers: [ AgendaService ],
})
export class AppModule { }
