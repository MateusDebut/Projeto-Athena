import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AcessoComponent} from "./acesso.component";
import {LoginComponent} from "./login/login.component";
import {CadastroComponent} from "./cadastro/cadastro.component";


const routes: Routes = [
  {
    path: '',
    component: AcessoComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        component: LoginComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'cadastro',
        component: CadastroComponent
      },
      { path: '**',
        redirectTo: 'login'
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcessoRoutingModule { }
