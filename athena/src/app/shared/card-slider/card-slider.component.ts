import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.css']
})
export class CardSliderComponent implements OnInit {

  @Input() listaDeElementos!: any[]
  @Input() tituloSlider!: string

  constructor() { }

  ngOnInit(): void {
  }

}
