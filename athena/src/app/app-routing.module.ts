import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DisciplinaComponent} from "./views/disciplina/disciplina.component";
import {AulaComponent} from "./views/aula/aula.component";
import {CadastroComponent} from "./views/cadastro/cadastro.component";
import {LoginComponent} from "./views/login/login.component";
import {HomeComponent} from "./views/home/home.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: "full"},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'disciplina/:id', component: DisciplinaComponent},
  {path: 'aula/:id', component: AulaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
