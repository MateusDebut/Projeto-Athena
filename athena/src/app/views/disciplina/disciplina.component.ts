import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DisciplinaService} from "../../services/disciplina.service";
import {Disciplina} from "../../model/Disciplina";

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.css']
})
export class DisciplinaComponent implements OnInit {

  disciplina!: Disciplina;
  disciplinaId!: number;

  constructor(private disciplinaService: DisciplinaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    window.scroll(0, 0);
    this.disciplinaId = this.route.snapshot.params["id"];
    this.findByIdDisciplina(this.disciplinaId);
  }

  findByIdDisciplina(disciplinaId: number) {
    this.disciplinaService.getDisciplinaById(disciplinaId).subscribe((resp: Disciplina) => {
      this.disciplina = resp;
    })
  }

}
