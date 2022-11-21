import { Injectable } from '@angular/core';
import {Observable, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, retry} from "rxjs/operators";
import { Professor } from '../model/Professor';
import {LoginResponse} from "../model/LoginResponse";

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  url = "http://localhost:3000/professores";
  urlLogin = "http://localhost:3000/login";

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

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

  loginProfessor(professor: Professor): Observable<LoginResponse>{
    // @ts-ignore
    return this.httpClient.post<LoginResponse>(this.urlLogin, JSON.stringify(professor), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  loginFakeProfessor(professor: Professor): Observable<LoginResponse>{
    alert("esse login é fake")
    // @ts-ignore
    return this.httpClient.get<LoginResponse>(this.urlLogin)
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
    return this.httpClient.delete<Professor>(this.url + '/' + professor.id, this.httpOptions)
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
