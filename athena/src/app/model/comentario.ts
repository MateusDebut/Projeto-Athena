import {Aula} from "./Aula";
import {Usuario} from "./Usuario";

export interface Comentario {
  id: number;
  data: Date;
  comentario: string;
  aula: Aula;
  usuario: Usuario;
}

export type Comentarios = Array<Comentario>;
