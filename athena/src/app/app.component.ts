import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AulaComponent} from "./views/aula/aula.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'athena';

  constructor(private route: ActivatedRoute, public router: Router) { }

  ngOnInit(){
  }

}
