import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AulaComponent} from "./views/aula/aula.component";
import {DisciplinaComponent} from "./views/disciplina/disciplina.component";
import {SafePipe} from "./safe.pipe";
import {FormsModule} from "@angular/forms";
import {SidebarComponent} from "./shared/sidebar/sidebar.component";
import {NavbarComponent} from "./shared/navbar/navbar.component";
import { HomeComponent } from './views/home/home.component';
import { MensagensComponent } from './shared/mensagens/mensagens.component';
import { GradeDisciplinasComponent } from './shared/grade-disciplinas/grade-disciplinas.component';
import {AutenticacaoInterceptor} from "./acesso/autenticacao.interceptor";
import {AcessoModule} from "./acesso/acesso.module";
import { ComentariosComponent } from './shared/comentarios/comentarios.component';

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
    ComentariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AcessoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
