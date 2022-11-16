import { Component, OnInit } from '@angular/core';
import {Aula} from "../../model/Aula";
import {AulaService} from "../../services/aula.service";
import {LoginResponse} from "../../model/LoginResponse";
import {Router} from "@angular/router";
import {CommonService} from "../../services/CommonService";
import {AulaComponent} from "../aula/aula.component";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  aulaId!: number;
  aulas!: Aula[];
  aula!: Aula;

  constructor(private aulaService: AulaService, private router: Router,
              private commonService: CommonService, private aulaComponent: AulaComponent) { }

  ngOnInit(): void {
    this.getAulas();
  }

  getAulas(){
    return this.aulaService.getAulas().subscribe((resp: Aula[]) =>{
      this.aulas = resp;
    })
  }

  getAulaById(id: number){
    return this.aulaService.getAulaById(id).subscribe((resp: Aula) => {
      this.aula = resp;
    })
  }

  irParaAula(id: number){
    this.router.navigate(['/aula/' + id.toString()]);
    this.aulaComponent.updatePage(id);
  }

}
