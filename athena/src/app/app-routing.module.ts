import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AulaComponent} from "./views/aula/aula.component";
import {DisciplinaComponent} from "./views/disciplina/disciplina.component";
import {AcessoComponent} from "./acesso/acesso.component";
import {HomeComponent} from "./views/home/home.component";
import {AutenticacaoGuard} from "./acesso/autenticacao.guard";


const routes: Routes = [
  {path: '', pathMatch: "full", redirectTo: 'acesso', component: AcessoComponent},
  {
    path: 'acesso',
    loadChildren: ()=> import('./acesso/acesso.module').then((m) => m.AcessoModule)
  },
  {path: 'home', component: HomeComponent, canActivate: [AutenticacaoGuard]},
  {path: 'disciplina/:id', component: DisciplinaComponent, canActivate: [AutenticacaoGuard]},
  {path: 'aula/:id', component: AulaComponent, canActivate: [AutenticacaoGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
