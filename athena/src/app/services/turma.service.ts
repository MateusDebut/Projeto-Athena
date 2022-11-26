import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {Turma} from "../model/Turma";
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})

export class TurmaService{

  url = `${environment.apiUrl}/turmas`;


  constructor(private httpClient: HttpClient) {
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
