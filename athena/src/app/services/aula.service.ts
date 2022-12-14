import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {Aula} from "../model/Aula";
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})

export class AulaService{

  url = `${environment.apiUrl}/aulas`;


  constructor(private httpClient: HttpClient) {
  }

  getAulas(): Observable<Aula[]>{
    return this.httpClient.get<Aula[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getAulaById(id: number): Observable<Aula>{
    return this.httpClient.get<Aula>(this.url + '/' + id)
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
