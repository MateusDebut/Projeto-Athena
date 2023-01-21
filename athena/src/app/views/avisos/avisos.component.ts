import {Component, OnInit} from '@angular/core';
import {Aviso} from "../../model/Aviso";
import {ActivatedRoute} from "@angular/router";
import {AvisoService} from "../../services/aviso.service";

@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.css']
})
export class AvisosComponent implements OnInit {

  avisos: Aviso[] = new Array();

  constructor(private avisoService: AvisoService,
              private route: ActivatedRoute) {
    this.getAll();
  }

  ngOnInit(): void {
  }

  getAll(){
    this.avisoService.getAll().subscribe((resp) => {
      this.avisos = resp;
    })
  }

}
