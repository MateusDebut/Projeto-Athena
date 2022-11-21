import {Role} from "../Role";

export class AlunoDTO{
  "id": number;
  "nome": string;
  "email": string;
  "token": string;
  "roles": Role[];
}
