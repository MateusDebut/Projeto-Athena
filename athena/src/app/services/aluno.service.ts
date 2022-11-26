import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {Aluno} from "../model/Aluno";
import {environment} from "../../environments/environment.prod";
import {Usuario} from "../model/Usuario";

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  url = `${environment.apiUrl}/alunos`;

  constructor(private httpClient: HttpClient) { }

  getAlunos(): Observable<Aluno[]>{
    return this.httpClient.get<Aluno[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  login(aluno: Aluno): Observable<Usuario>{
    return this.httpClient.post<Usuario>(this.url + "/logar", JSON.stringify(aluno))
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  saveAluno(aluno: Aluno): Observable<Aluno>{
    return this.httpClient.post<Aluno>(this.url + "/cadastrar", JSON.stringify(aluno))
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
