import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { environment } from 'src/environments/environment.prod';
import {AlunoDTO} from "../../model/DTOs/AlunoDTO";
import {Professor} from "../../model/Professor";
import {LoginResponse} from "../../model/LoginResponse";
import {AlunoService} from "../../services/aluno.service";
import {Aluno} from "../../model/Aluno";
import {ProfessorService} from "../../services/professor.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  professor: Professor = new Professor();
  aluno: Aluno = new Aluno();

  constructor(private alunoService: AlunoService, private professorService: ProfessorService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  loginAluno(){
    this.alunoService.loginAluno(this.aluno).subscribe((resp: AlunoDTO) => {
      if(resp.token != null){
        environment.token = resp.token;
        localStorage.setItem("token", resp.token);
        console.log(resp.token)
        this.router.navigate(['/home']);
      }else{
        alert("Tell me who you are")
      }
    });
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
