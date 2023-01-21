import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DisciplinaService} from "../../services/disciplina.service";
import {Disciplina} from "../../model/Disciplina";
import {Atividade} from "../../model/Atividade";
import {Aviso} from "../../model/Aviso";

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.css']
})
export class DisciplinaComponent implements OnInit {

  disciplina!: Disciplina;
  disciplinaId!: number;

  constructor(private disciplinaService: DisciplinaService, private route: ActivatedRoute) {
    this.disciplinaId = this.route.snapshot.params["id"];
    this.findByIdDisciplina(this.disciplinaId);
  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

  findByIdDisciplina(disciplinaId: number) {
    this.disciplinaService.getDisciplinaById(disciplinaId).subscribe((resp: Disciplina) => {
      this.disciplina = resp;
    })
  }

  getAllAtividades(): Atividade[]{
    let atividades: Atividade[] = new Array();
    this.disciplina.aulas.forEach(aula => {
      aula.atividades.forEach(atividade => {
        atividades.push(atividade);
      })
    })
    return atividades.slice().reverse();
  }

}
