import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  email: FormControl;
  mensaje: FormControl;

  constructor(private router: Router) {

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
