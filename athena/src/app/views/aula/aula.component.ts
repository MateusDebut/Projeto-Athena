import { Component, OnInit } from '@angular/core';
import {Aula} from "../../model/Aula";
import {AulaService} from "../../services/aula.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {CommonService} from "../../services/CommonService";

@Component({
  selector: 'app-aula',
  templateUrl: './aula.component.html',
  styleUrls: ['./aula.component.css']
})
export class AulaComponent implements OnInit {

  aulaId!: number;
  aulas!: Aula[];
  aula!: Aula;
  subscriptionName!: Subscription;

  constructor(private aulaService: AulaService, public route: ActivatedRoute,
              private commonService: CommonService) { }

  ngOnInit(): void {
    this.getAulas();
    this.aulaId = this.route.snapshot.params["id"];
    this.getAulaById();
  }

  updatePage(id: number){
    this.aulaId = id;
    this.getAulaById();
  }

  getAulas(){
    this.aulaService.getAulas().subscribe((resp: Aula[]) => {
      this.aulas = resp;
    })
  }

  getAulaById(){
    this.aulaService.getAulaById(this.aulaId).subscribe((resp: Aula) => {
      this.aula = resp;
    })
  }

  getEmbedUrlYoutubeVideo(urlYoutubeVideo: string) : string{
    if(urlYoutubeVideo.includes("embed")){
      return urlYoutubeVideo;
    }

    let idVideo = urlYoutubeVideo.replace("https://www.youtube.com/watch?v=", "");
    let urlEmbed = "https://www.youtube.com/embed/" + idVideo;
    return urlEmbed;
  }

}
