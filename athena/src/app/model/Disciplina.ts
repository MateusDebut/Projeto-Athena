import {Professor} from "./Professor";
import {Aula} from "./Aula";

export interface Disciplina{
  id: number
  nome: string
  imagem: string
  professor: Professor
  aulas: Aula[]
}
