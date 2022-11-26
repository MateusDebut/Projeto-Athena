import {Role} from "./Role";

export interface Usuario {
  nome: string,
  senha: string,
  token: string;
  roles: Role[];
}
