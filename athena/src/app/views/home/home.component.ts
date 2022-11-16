import { Component, OnInit } from '@angular/core';
import {Disciplina} from "../../model/Disciplina";
import {DisciplinaService} from "../../services/disciplina.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  disciplinas!: Disciplina[];

  constructor(private disciplinaService: DisciplinaService) { }

  ngOnInit(): void {
    this.getDisciplinas();
  }

  getDisciplinas(){
    this.disciplinaService.getDisciplinas().subscribe((disciplinas: Disciplina[]) => {
      this.disciplinas = disciplinas;
    })
  }

}
