import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AulaComponent} from "./views/aula/aula.component";
import {DisciplinaComponent} from "./views/disciplina/disciplina.component";
import {SafePipe} from "./safe.pipe";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SidebarComponent} from "./shared/sidebar/sidebar.component";
import {NavbarComponent} from "./shared/navbar/navbar.component";
import { HomeComponent } from './views/home/home.component';
import { MensagensComponent } from './shared/mensagens/mensagens.component';
import { GradeDisciplinasComponent } from './shared/grade-disciplinas/grade-disciplinas.component';
import {AutenticacaoInterceptor} from "./acesso/autenticacao.interceptor";
import {AcessoModule} from "./acesso/acesso.module";
import { ComentariosComponent } from './shared/comentarios/comentarios.component';
import { GerenciamentoDisciplinaComponent } from './shared/gerenciamento-disciplina/gerenciamento-disciplina.component';
import { CardSliderComponent } from './shared/card-slider/card-slider.component';
import { AtividadeComponent } from './views/atividade/atividade.component';
import { MatIconModule } from '@angular/material/icon';
import { ListaAvisosComponent } from './shared/lista-avisos/lista-avisos.component';
import { AvisosComponent } from './views/avisos/avisos.component';
import { AvisoComponent } from './views/aviso/aviso.component';

@NgModule({
  declarations: [
    AppComponent,
    DisciplinaComponent,
    AulaComponent,
    SafePipe,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    MensagensComponent,
    GradeDisciplinasComponent,
    ComentariosComponent,
    GerenciamentoDisciplinaComponent,
    CardSliderComponent,
    AtividadeComponent,
    ListaAvisosComponent,
    AvisosComponent,
    AvisoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AcessoModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
