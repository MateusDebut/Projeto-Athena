import {Component, OnInit} from '@angular/core';
import {Professor} from "../../model/Professor";
import {Aluno} from "../../model/Aluno";
import {AlunoService} from "../../services/aluno.service";
import {ProfessorService} from "../../services/professor.service";
import {Turma} from "../../model/Turma";
import {TurmaService} from "../../services/turma.service";

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
              private turmaService: TurmaService) { }

  ngOnInit(): void {
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
