import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Aviso} from "../model/Aviso";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class AvisoService{

  url: string = environment.apiUrl + "/avisos"

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Aviso[]>{
    return this.httpClient.get<Aviso[]>(this.url).pipe(
      retry(3)
    )
  }

  getById(id: number): Observable<Aviso>{
    return this.httpClient.get<Aviso>(this.url + "/" + id).pipe(
      retry(3)
    )
  }

}
