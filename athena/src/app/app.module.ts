import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {AulaComponent} from "./views/aula/aula.component";
import {DisciplinaComponent} from "./views/disciplina/disciplina.component";
import {SafePipe} from "./safe.pipe";
import {FormsModule} from "@angular/forms";
import {SidebarComponent} from "./views/sidebar/sidebar.component";
import {NavbarComponent} from "./shared/navbar/navbar.component";
import { HomeComponent } from './views/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DisciplinaComponent,
    AulaComponent,
    SafePipe,
    SidebarComponent,
    NavbarComponent,
    HomeComponent
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
