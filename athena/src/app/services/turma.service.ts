import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {Turma} from "../model/Turma";

@Injectable({
  providedIn: 'root'
})

export class TurmaService{

  url = "http://localhost:8080/turmas";


  constructor(private httpClient: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  getTurmas(): Observable<Turma[]>{
    return this.httpClient.get<Turma[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getTurmaById(id: number): Observable<Turma>{
    return this.httpClient.get<Turma>(this.url + '/' + id)
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
