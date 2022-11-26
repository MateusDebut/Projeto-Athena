import {Component, Input, OnInit} from '@angular/core';
import {Disciplina} from "../../model/Disciplina";

@Component({
  selector: 'app-grade-disciplinas',
  templateUrl: './grade-disciplinas.component.html',
  styleUrls: ['./grade-disciplinas.component.css']
})
export class GradeDisciplinasComponent implements OnInit {

  @Input() disciplinas!: Disciplina[];

  constructor() { }

  ngOnInit(): void {
  }

}
