import {Role} from "./Role";
import {Turma} from "./Turma";

export class Aluno{
  "id": number;
  "nome": string;
  "email": string;
  "turma": Turma;
  "senha": string;
  "roles": Role[];
}
