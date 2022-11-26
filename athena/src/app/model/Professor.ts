import {Disciplina} from "./Disciplina";
import {Usuario} from "./Usuario";
import {Role} from "./Role";

export class Professor implements Usuario{
  "id": number;
  "nome": string;
  "email": string;
  "senha": string;
  "telefone": string;
  "turmas_id": number[];
  "disciplinas": Disciplina[]
  "roles": Role[];
  "token": string;
}
