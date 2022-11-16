import {Disciplina} from "./Disciplina";

export class Professor {
  "id": number;
  "nome": string;
  "email": string;
  "telefone": string;
  "turmas_id": number[];
  "disciplinas": Disciplina[]
}
