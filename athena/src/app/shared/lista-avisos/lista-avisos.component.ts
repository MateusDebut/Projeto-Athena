import {Component, Input, OnInit} from '@angular/core';
import {Aviso} from "../../model/Aviso";

@Component({
  selector: 'app-lista-avisos',
  templateUrl: './lista-avisos.component.html',
  styleUrls: ['./lista-avisos.component.css']
})
export class ListaAvisosComponent implements OnInit {

  @Input() listaDeAvisos: Aviso[] = new Array();

  constructor() { }

  ngOnInit(): void {
  }

}
