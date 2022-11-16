import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Disciplina} from "../model/Disciplina";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  url = "http://localhost:3000/disciplinas";

  constructor(private httpClient: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  getDisciplinas(): Observable<Disciplina[]>{
    return this.httpClient.get<Disciplina[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getDisciplinaById(id: number): Observable<Disciplina>{
    return this.httpClient.get<Disciplina>(this.url + '/' + id)
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
