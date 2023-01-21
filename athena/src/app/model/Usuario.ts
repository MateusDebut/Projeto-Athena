import {Role} from "./Role";

export class Usuario {
  "email": string;
  "senha": string;
  "token": string;
  "roles": Role[];
}
