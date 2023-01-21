import {Professor} from "./Professor";
import {Aula} from "./Aula";
import {Aviso} from "./Aviso";

export interface Disciplina{
  id: number
  nome: string
  imagem: string
  professor: Professor
  aulas: Aula[]
  avisos: Aviso[]
}
