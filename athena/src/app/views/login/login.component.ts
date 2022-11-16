import { Component, OnInit } from '@angular/core';
import {Professor} from "../../model/Professor";
import {Aluno} from "../../model/Aluno";
import {AlunoService} from "../../services/aluno.service";
import {ProfessorService} from "../../services/professor.service";
import {LoginResponse} from "../../model/LoginResponse";
import {Router, RouterStateSnapshot} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  professor: Professor = new Professor();
  aluno: Aluno = new Aluno();

  constructor(private alunoService: AlunoService, private professorService: ProfessorService,
              private router: Router) { }

  ngOnInit(): void {
  }

  loginProfessor(){
    this.professorService.loginFakeProfessor(this.professor).subscribe((resp: LoginResponse) => {
      if(resp.response){
        this.router.navigate(['/home']);
      }else{
        alert("Tell me who you are")
      }
    });
  }

}
