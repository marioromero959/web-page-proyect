import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonios',
  templateUrl: './testimonios.component.html',
  styleUrls: ['./testimonios.component.scss']
})
export class TestimoniosComponent implements OnInit {

  testimonios = [
    {
      nombre:'Fulano 1',
      texto:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, tempora impedit. Iusto, dignissimos rem deleniti quos pariatur nam optio dolorum ratione fugit aut, possimus, voluptas aperiam fugiat aliquam! Adipisci, omnis.'
    },
    {
      nombre:'Fulano 2',
      texto:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, tempora impedit. Iusto, dignissimos rem deleniti quos pariatur nam optio dolorum ratione fugit aut, possimus, voluptas aperiam fugiat aliquam! Adipisci, omnis.'
    },
    {
      nombre:'Fulano 3',
      texto:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, tempora impedit. Iusto, dignissimos rem deleniti quos pariatur nam optio dolorum ratione fugit aut, possimus, voluptas aperiam fugiat aliquam! Adipisci, omnis.'
    },
  ]
   
  constructor() { }

  ngOnInit(): void {
  }

}
