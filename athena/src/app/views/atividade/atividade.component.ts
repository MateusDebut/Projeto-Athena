import { Component, OnInit } from '@angular/core';
import {Atividade} from "../../model/Atividade";
import {ActivatedRoute, Route} from "@angular/router";
import {AtividadeService} from "../../services/atividade.service";

@Component({
  selector: 'app-atividade',
  templateUrl: './atividade.component.html',
  styleUrls: ['./atividade.component.css']
})
export class AtividadeComponent implements OnInit {

  atividade!: Atividade;
  atividadeId!: number;

  constructor(private atividadeService: AtividadeService,
              private route: ActivatedRoute) {
    this.atividadeId = this.route.snapshot.params["id"];
    this.getById(this.atividadeId);
  }

  ngOnInit(): void {
  }

  getById(id: number){
    this.atividadeService.getById(id).subscribe((resp) =>{
      this.atividade = resp;
    });
  }

}
