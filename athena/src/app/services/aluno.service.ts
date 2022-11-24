import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Aluno } from "../model/Aluno";
import {AlunoDTO} from "../model/DTOs/AlunoDTO";
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  url = "http://localhost:8080/alunos";

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
  }

  getAlunos(): Observable<Aluno[]>{
    return this.httpClient.get<Aluno[]>(this.url, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  loginAluno(aluno: Aluno): Observable<AlunoDTO>{
    return this.httpClient.post<AlunoDTO>(this.url + "/logar", JSON.stringify(aluno), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  saveAluno(aluno: Aluno): Observable<Aluno>{
    return this.httpClient.post<Aluno>(this.url + "/cadastrar", JSON.stringify(aluno), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
