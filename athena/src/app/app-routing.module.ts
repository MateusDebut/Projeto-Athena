import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AulaComponent} from "./views/aula/aula.component";
import {DisciplinaComponent} from "./views/disciplina/disciplina.component";
import {AcessoComponent} from "./acesso/acesso.component";
import {HomeComponent} from "./views/home/home.component";
import {AutenticacaoGuard} from "./acesso/autenticacao.guard";
import {AtividadeComponent} from "./views/atividade/atividade.component";
import {AvisosComponent} from "./views/avisos/avisos.component";
import {AvisoComponent} from "./views/aviso/aviso.component";


const routes: Routes = [
  {path: '', pathMatch: "full", redirectTo: 'acesso', component: AcessoComponent},
  {
    path: 'acesso',
    loadChildren: ()=> import('./acesso/acesso.module').then((m) => m.AcessoModule)
  },
  {path: 'home', component: HomeComponent, canActivate: [AutenticacaoGuard]},
  {path: 'disciplina/:id', component: DisciplinaComponent, canActivate: [AutenticacaoGuard]},
  {path: 'aulas/:id', component: AulaComponent, canActivate: [AutenticacaoGuard]},
  {path: 'atividades/:id', component: AtividadeComponent, canActivate: [AutenticacaoGuard]},
  {path: 'avisos', component: AvisosComponent, canActivate: [AutenticacaoGuard]},
  {path: 'aviso/:id', component: AvisoComponent, canActivate: [AutenticacaoGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
