import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment.prod";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Atividade} from "../model/Atividade";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AtividadeService{
  url = `${environment.apiUrl}/atividades`;


  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Atividade[]>{
    return this.httpClient.get<Atividade[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getById(id: number): Observable<Atividade>{
    return this.httpClient.get<Atividade>(this.url + "/" + id)
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
