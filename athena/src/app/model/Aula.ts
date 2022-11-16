import {Disciplina} from "./Disciplina";
import {Atividade} from "./Atividade";

export interface Aula{
  "id": number
  "titulo": string
  "tema": string
  "link_video": string,
  "disciplina": Disciplina,
  atividades: Atividade[]
}
