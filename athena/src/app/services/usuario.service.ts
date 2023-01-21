import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment.prod";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {Usuario} from "../model/Usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = environment.apiUrl;
  estaLogado = false;

  constructor(private httpClient: HttpClient) { }

  login(usuario: Usuario, rota: string): Observable<Usuario>{
    return this.httpClient.post<Usuario>(`${this.url}/${rota}/logar`, JSON.stringify(usuario))
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
