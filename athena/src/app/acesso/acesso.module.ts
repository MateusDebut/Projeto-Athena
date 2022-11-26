import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcessoComponent } from './acesso.component';
import {RouterOutlet} from "@angular/router";
import {AcessoRoutingModule} from "./acesso-routing.module";
import {CadastroComponent} from "./cadastro/cadastro.component";
import {LoginComponent} from "./login/login.component";
import {FormsModule} from "@angular/forms";
import {AutenticacaoInterceptor} from "./autenticacao.interceptor";
import {HTTP_INTERCEPTORS} from "@angular/common/http";

@NgModule({
  declarations: [
    AcessoComponent,
    CadastroComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    AcessoRoutingModule,
    FormsModule
  ],
  exports: [
    AcessoComponent,
    AcessoRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AutenticacaoInterceptor,
      multi: true
    }
  ]
})
export class AcessoModule { }
