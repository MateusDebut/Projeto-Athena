import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {HomeComponent} from "./views/home/home.component";
import {CadastroComponent} from "./views/cadastro/cadastro.component";
import {AulaComponent} from "./views/aula/aula.component";
import {DisciplinaComponent} from "./views/disciplina/disciplina.component";
import {SafePipe} from "./safe.pipe";
import {LoginComponent} from "./views/login/login.component";
import {FormsModule} from "@angular/forms";
import {SidebarComponent} from "./views/sidebar/sidebar.component";
import {NavbarComponent} from "./shared/navbar/navbar.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DisciplinaComponent,
    AulaComponent,
    SafePipe,
    CadastroComponent,
    LoginComponent,
    HomeComponent,
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
