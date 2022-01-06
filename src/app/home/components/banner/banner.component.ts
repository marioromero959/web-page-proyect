import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {


  imagenes = [
    {titulo:'Derechos',
      img:'./../../../assets/banner1.jpeg'},
    {titulo:'Experiencia',
      img:'./../../../assets/banner2.jpg'},
    {titulo:'Confianza',
      img:'./../../../assets/banner3.jpg'},
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
