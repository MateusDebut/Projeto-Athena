import {Component, OnInit} from '@angular/core';
import {Professor} from "../../model/Professor";
import {Turma} from "../../model/Turma";
import {TurmaService} from "../../services/turma.service";
import {AlunoService} from "../../services/aluno.service";
import {Aluno} from "../../model/Aluno";
import {ProfessorService} from "../../services/professor.service";
import {Role} from "../../model/Role";


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  professor: Professor = new Professor();
  aluno: Aluno = new Aluno();
  turmas: Turma[] = [];

  constructor(private alunoService: AlunoService, private professorService: ProfessorService,
              private turmaService: TurmaService) {
    this.aluno.roles = new Array();
    this.aluno.roles.push(new Role());
    this.aluno.turma = new Turma();
  }

  ngOnInit(): void {
    this.getTurmas();
  }

  postProfessor(){
    this.professorService.saveProfessor(this.professor).subscribe(() => {
    });
  }

  postAluno(){
    this.alunoService.saveAluno(this.aluno).subscribe(() =>{
    })
  }

  getTurmas(){
    this.turmaService.getTurmas().subscribe((resp: Turma[]) => {
      this.turmas = resp;
    })
  }

}
