import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AvisoService} from "../../services/aviso.service";
import {Aviso} from "../../model/Aviso";

@Component({
  selector: 'app-aviso',
  templateUrl: './aviso.component.html',
  styleUrls: ['./aviso.component.css']
})
export class AvisoComponent implements OnInit {

  avisoId!: number;
  aviso!: Aviso;

  constructor(private avisoService: AvisoService,
              private route: ActivatedRoute) {
    this.avisoId = this.route.snapshot.params["id"];
    this.getById(this.avisoId);
  }

  ngOnInit(): void {
  }

  getById(id: number){
    this.avisoService.getById(id).subscribe((resp)=> {
      this.aviso = resp;
    })
  }

}
