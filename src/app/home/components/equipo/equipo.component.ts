import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent implements OnInit {

  cartas = [
  {
    nombre:'María Veronica Kulman',
    imagen:'../../../../assets/vero1.jpeg',
    description:'Abogada'
  },
  {
    nombre:'Micaela Matorras',
    imagen:'../../../../assets/mica1.jpeg',
    description:'Abogada'
  },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
