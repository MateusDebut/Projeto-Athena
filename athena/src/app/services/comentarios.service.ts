import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Comentario} from "../model/comentario";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  url = `${environment.apiUrl}`;

  constructor(private httpClient: HttpClient) { }

  getComentarios(aulaId: number): Observable<Comentario[]>{
    return this.httpClient.get<Comentario[]>(this.url + "/aulas/" + aulaId + "/comentarios")
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  postComentario(comentario: Comentario): Observable<Comentario>{
    return this.httpClient.post<Comentario>(this.url + "/comentarios", JSON.stringify(comentario))
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getComentariosById(id: number): Observable<Comentario>{
    return this.httpClient.get<Comentario>(this.url + "/comentarios/" + id)
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
