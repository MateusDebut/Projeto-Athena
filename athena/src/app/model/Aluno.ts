import {Turma} from "./Turma";
import {Usuario} from "./Usuario";

export class Aluno extends Usuario{
  "id": number;
  "nome": string;
  "turma": Turma;
}
