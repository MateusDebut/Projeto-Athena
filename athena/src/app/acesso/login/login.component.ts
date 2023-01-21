import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProfessorService} from "../../services/professor.service";
import {Usuario} from "../../model/Usuario";
import {UsuarioService} from "../../services/usuario.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();
  ehProfessor!: boolean;

  constructor(private usuarioService: UsuarioService, private professorService: ProfessorService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  login(){
    if(this.ehProfessor){
      this.loginProfessor();
    }else{
      this.loginAluno();
    }
  }

  private loginAluno(){
    this.usuarioService.login(this.usuario, "alunos").subscribe((resp: Usuario) => {
      if(resp.token != null){
        localStorage.setItem("token", resp.token);
        this.usuarioService.estaLogado = true;
        this.router.navigate(['/home']);
      }else{
        alert("Tell me who you are")
      }
    });
  }

  private loginProfessor(){
    this.usuarioService.login(this.usuario, "professores").subscribe((resp: Usuario) => {
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
