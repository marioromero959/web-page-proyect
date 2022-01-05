import { AfterViewInit, Component, OnInit } from '@angular/core';
import Swiper,{Autoplay} from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  valores = [
    {nombre:'Asesoría legal clara y precisa',imagen:''},
    {nombre:'Honestidad y confianza',imagen:''},
    {nombre:'Abogacía preventiva',imagen:''},
    {nombre:'Certeza y transparencia',imagen:''},
    {nombre:'Responsabilidad',imagen:''},
  ]


  constructor() {}

  ngOnInit(){}

  ngAfterViewInit(){
    Swiper.use([Autoplay]);
    const swiper = new Swiper('.swiper', {
      loop: true,
      autoplay:{
        disableOnInteraction:false,
        delay:2000,
      },
      grabCursor: true,
    });
  }
}












