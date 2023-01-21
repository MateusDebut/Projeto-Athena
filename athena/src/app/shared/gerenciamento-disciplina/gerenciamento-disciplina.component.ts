import { Component, OnInit } from '@angular/core';
import {Disciplina} from "../../model/Disciplina";

@Component({
  selector: 'app-gerenciamento-disciplina',
  templateUrl: './gerenciamento-disciplina.component.html',
  styleUrls: ['./gerenciamento-disciplina.component.css']
})
export class GerenciamentoDisciplinaComponent implements OnInit {

  disciplinas!: Disciplina[];

  constructor() { }

  ngOnInit(): void {
  }

}
