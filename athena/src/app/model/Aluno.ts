import {Role} from "./Role";

export class Aluno{
  "id": number;
  "nome": string;
  "email": string;
  "turma": number;
  "senha": string;
  "roles": Role[];
}
