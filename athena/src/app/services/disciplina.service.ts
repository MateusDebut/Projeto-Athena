import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import { environment } from 'src/environments/environment.prod';
import {Disciplina} from "../model/Disciplina";


@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  url = "http://localhost:8080/disciplinas";

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
  }

  httpOptions = {
    headers: new HttpHeaders()
  }

  getDisciplinas(): Observable<Disciplina[]>{
    this.httpOptions.headers = this.getHttpHeaders();
    this.httpOptions.headers.set('Authorization', localStorage.getItem("token")!)
    return this.httpClient.get<Disciplina[]>(this.url , this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  private getHttpHeaders(): HttpHeaders{
    return this.httpOptions.headers.set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Cache-Control', 'no-cache, no-store, must-revalidate, post-check=0, pre-check=0')
      .set('Pragma','no-cache')
      .set('Expires','Sat, 01 Jan 2000 00:00:00 GMT')
      .set('Authorization', localStorage.getItem("token")!);
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
