import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  email: FormControl;
  mensaje: FormControl;
  name: FormControl;

  constructor(private router: Router) {
    this.name = new FormControl( '', [
      Validators.required
    ]);
    this.email = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
    this.mensaje = new FormControl('', [
      Validators.required
    ]);
  }

  ngOnInit(){
  }

  emailEnviado() {
    if (this.email.valid && this.mensaje.valid){
      console.log(this.name.value);
      console.log(this.email.value);
      console.log(this.mensaje.value);
      alert('Su mensaje ha sido enviado con exito');
      // this.router.navigate(['home']);
      window.location.reload();
    }else{
      alert('Por favor escriba su mensaje');
    }
  }


}












