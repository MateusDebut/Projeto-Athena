import {Aula} from "./Aula";

export interface Atividade {
  "id": number,
  "titulo": number,
  "links_pdf": string[],
  "aula": Aula
}
