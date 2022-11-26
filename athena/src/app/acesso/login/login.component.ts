import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Professor} from "../../model/Professor";
import {AlunoService} from "../../services/aluno.service";
import {Aluno} from "../../model/Aluno";
import {ProfessorService} from "../../services/professor.service";
import {Usuario} from "../../model/Usuario";
import {UsuarioService} from "../../services/usuario.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  professor: Professor = new Professor();
  aluno: Aluno = new Aluno();

  constructor(private usuarioService: UsuarioService, private professorService: ProfessorService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  loginAluno(){
    this.usuarioService.login(this.aluno).subscribe((resp: Usuario) => {
      if(resp.token != null){
        localStorage.setItem("token", resp.token);
        this.usuarioService.estaLogado = true;
        this.router.navigate(['/home']);
      }else{
        alert("Tell me who you are")
      }
    });
  }

}
