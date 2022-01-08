import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

  servicios = [
    {nombre:'Asesoría Jurídica Integral',imagen:'../../../../assets/act1.jpg'},
    {nombre:'Causas civiles y comerciales',imagen:'../../../../assets/act1.jpg'},
    {nombre:'Derecho de Familia y Sucesiones',imagen:'../../../../assets/act1.jpg'},
    {nombre:'Accidentes de Tránsito',imagen:'../../../../assets/act1.jpg'},
    {nombre:'Defensas del consumidor',imagen:'../../../../assets/act1.jpg'},
    {nombre:'Derecho Laboral',imagen:'../../../../assets/act1.jpg'},
    {nombre:'Daños y Perjuicios',imagen:'../../../../assets/act1.jpg'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
