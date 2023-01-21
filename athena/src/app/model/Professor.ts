import {Disciplina} from "./Disciplina";
import {Usuario} from "./Usuario";

export class Professor extends Usuario{
  "id": number;
  "nome": string;
  "telefone": string;
  "turmas_id": number[];
  "disciplinas": Disciplina[]
}
