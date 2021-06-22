import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(){
  }
toHome(){
  document.getElementById('home').scrollIntoView({behavior: 'smooth'});
}
toAbout(){
  document.getElementById('about').scrollIntoView({behavior: 'smooth'});
}
toMision(){
  document.getElementById('mision').scrollIntoView({behavior: 'smooth'});
}
toContact(){
  document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
}
}
