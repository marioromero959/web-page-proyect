import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(){
  }
  irA(view){
    if(screen.width <= 480){
      document.getElementById(view).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });      
    }else{
      document.getElementById(view).scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest"
      });
    }
}
}
