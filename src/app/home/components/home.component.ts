import { AfterViewInit, Component, OnInit } from '@angular/core';
import Swiper,{Autoplay, EffectCube} from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor() {}

  ngOnInit(){}

  ngAfterViewInit(){
    Swiper.use([Autoplay,EffectCube]);
    const swiper = new Swiper('.swiper', {
      effect:"cube",
      loop: true,
      autoplay:{
        disableOnInteraction:false,
        delay:2000,
      },
      grabCursor: true,
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 25,
          shadowScale: 0.94,
        },
    });
  }
}












