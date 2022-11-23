import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AulaComponent} from "./views/aula/aula.component";
import {DisciplinaComponent} from "./views/disciplina/disciplina.component";
import {HomeComponent} from "./home/home.component";
import {AcessoComponent} from "./acesso/acesso.component";


const routes: Routes = [
  {path: '', pathMatch: "full", redirectTo: 'acesso', component: AcessoComponent},
  {
    path: 'home',
    loadChildren: ()=> import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'acesso',
    loadChildren: ()=> import('./acesso/acesso.module').then((m) => m.AcessoModule)
  },
  {path: 'disciplina/:id', component: DisciplinaComponent},
  {path: 'aula/:id', component: AulaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
