import { createViewChildren } from '@angular/compiler/src/core';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import Swiper,{ Autoplay, EffectCreative } from 'swiper';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    Swiper.use([Autoplay,EffectCreative]);
    const swiper = new Swiper('.swiper', {
      effect:'creative',
      loop: true,
      autoplay:{
        disableOnInteraction:false,
        delay:4000,
      },
      grabCursor:true,
        creativeEffect: { 
          prev: {
            shadow: true,
            origin: 'left center',
            translate: ['-5%', 0, -200],
            rotate: [0, 100, 0]
          },
          next: {
            origin: 'right center',
            translate: ['5%', 0, -200],
            rotate: [0, -100, 0]
          }
        }, 
    });
  }

}
