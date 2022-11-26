import {Role} from "./Role";
import {Turma} from "./Turma";
import {Usuario} from "./Usuario";

export class Aluno implements Usuario{
  "id": number;
  "nome": string;
  "email": string;
  "turma": Turma;
  "senha": string;
  "roles": Role[];
  "token": string;
}
