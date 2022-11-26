import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {environment} from 'src/environments/environment.prod';
import {Disciplina} from "../model/Disciplina";


@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  url = `${environment.apiUrl}/disciplinas`;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
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
