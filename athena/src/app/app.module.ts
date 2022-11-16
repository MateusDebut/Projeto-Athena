import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { NavbarComponent } from './shared/navbar/navbar.component';
import { DisciplinaComponent } from './views/disciplina/disciplina.component';
import { AulaComponent } from './views/aula/aula.component';
import { SafePipe } from './safe.pipe';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { LoginComponent } from './views/login/login.component';
import {FormsModule} from "@angular/forms";
import { HomeComponent } from './views/home/home.component';
import {SidebarComponent} from "./views/sidebar/sidebar.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DisciplinaComponent,
    AulaComponent,
    SafePipe,
    CadastroComponent,
    LoginComponent,
    HomeComponent,
    SidebarComponent
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
