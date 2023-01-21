import {Aula} from "./Aula";

export interface Atividade {
  "id": number,
  "titulo": number,
  "descricao": string
  "link": string[],
  "aula": Aula,
  "data_de_publicacao": Date,
  "data_de_entrega": Date
}
