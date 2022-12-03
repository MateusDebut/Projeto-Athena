import {Component, Input, OnInit} from '@angular/core';
import {Comentario, Comentarios} from "../../model/comentario";
import {Observable, switchMap, tap} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ComentariosService} from "../../services/comentarios.service";

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  @Input() aulaId!: number;
  comentarios$!: Observable<Comentarios>;
  comentarioForm!: FormGroup;
  comentario!: Comentario;

  constructor(private comentarioService: ComentariosService,
              private formBuiler: FormBuilder) { }

  ngOnInit(): void {
    this.comentarios$ = this.comentarioService.getComentarios(this.aulaId);
    this.comentarioForm = this.formBuiler.group({
      comentario:['', Validators.maxLength(450)]
    })
  }

  gravar(): void{
    this.comentario = this.comentarioForm.get('comentario')?.value ?? '';
    this.comentarios$ = this.comentarioService.postComentario(this.comentario)
      .pipe(
        switchMap(() => this.comentarioService.getComentarios(this.aulaId)),
        tap(() => {
          this.comentarioForm.reset();
          alert("Comentário Salvo com Sucesso!");
        })
      )
  }

}
