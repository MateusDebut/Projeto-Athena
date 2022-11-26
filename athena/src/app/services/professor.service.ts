import {Injectable} from '@angular/core';
import {Observable, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, retry} from "rxjs/operators";
import {Professor} from '../model/Professor';
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  url = `${environment.apiUrl}/professores`;

  constructor(private httpClient: HttpClient) { }

  getProfessores(): Observable<Professor[]>{
    return this.httpClient.get<Professor[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getProfessorById(id: number): Observable<Professor>{
    return this.httpClient.get<Professor>(this.url + "/" + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  saveProfessor(professor: Professor): Observable<Professor>{
    // @ts-ignore
    return this.httpClient.post<Professor>(this.url, JSON.stringify(professor), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updateProfessor(professor: Professor): Observable<Professor> {
    // @ts-ignore
    return this.httpClient.put<Professor>(this.url + '/' + professor.id, JSON.stringify(professor), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  deleteProfessor(professor: Professor) {
    return this.httpClient.delete<Professor>(this.url + '/' + professor.id)
      .pipe(
        retry(1),
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
