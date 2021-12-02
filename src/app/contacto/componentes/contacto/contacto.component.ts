import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MailService } from 'src/app/servicios/mail.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  contacto:FormGroup;
  enviado:boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    // private _email: MailService
    ) { 
      this.contacto = this.formBuilder.group({
        nombre: ['',Validators.required],
        email: ['',[Validators.required,Validators.email]],
        telefono: [''],
        msg: ['',Validators.required],
      })
    }

  ngOnInit(): void {
  }
  get nombreCampo(){
    return this.contacto.get('nombre');
  }
  get emailCampo(){
    return this.contacto.get('email');
  }
  get msgCampo(){
    return this.contacto.get('msg');
  }
  
    errorEmail(){
      if (this.emailCampo?.hasError('required')) {
        return 'Debes escribir tu email';
      }
      return this.emailCampo?.hasError('email') ? 'No es un email válido' : '';
    } 
  // kkiwbqhdmbinsipb
  enviar(){
/*     if(this.contacto.valid){
      this._email.enviarMail(this.contacto.value).subscribe(res=>{
        console.log(res)
      });
      this.contacto.reset();
      this.enviado = true;
    }else{
      this.contacto.markAllAsTouched();
    } */
  }
}
