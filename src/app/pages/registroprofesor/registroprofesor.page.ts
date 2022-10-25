import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { RegistroserviceService, Usuario } from '../../services/registroservice.service';
import { ToastController } from '@ionic/angular';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registroprofesor.page.html',
  styleUrls: ['./registroprofesor.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;
  newUsuario: Usuario = <Usuario>{};

  constructor(private registroService: RegistroserviceService,
              private alertController: AlertController, 
              private toastController: ToastController,
              private fb:FormBuilder) { 
                  this.formularioRegistro = this.fb.group({
                      'rut': new FormControl("", Validators.required),
                      'nombre': new FormControl("", Validators.required),
                      'correo': new FormControl("", Validators.required),
                      'password': new FormControl("", Validators.required),
                      'confirmaPass': new FormControl("", Validators.required)
            });
          }


  ngOnInit() {
  }

  async CrearUsuario(){
    //console.log('Guardar');
   var form= this.formularioRegistro.value;
   if (this.formularioRegistro.invalid){
       const alert = await this.alertController.create({
         header: 'Datos Incompletos',
         message: 'Debe completar todos los datos',
         buttons: ['Aceptar'],
       });
   
       await alert.present();
       return;
     }

     this.newUsuario.rutUsuario = form.rut,
     this.newUsuario.nomUsuario = form.nombre,
     this.newUsuario.correoUsuario = form.correo, 
     this.newUsuario.passUsuario=form.password, 
     this.newUsuario.repassUsuario=form.confirmaPass;
     if (!this.validarUser())return;
     (await this.registroService.registerProfesor(this.newUsuario)).subscribe(async (reply:any) => { 
      console.log(reply);
      this.newUsuario = <Usuario>{};
      if(reply.code == "ER_DUP_ENTRY")return await this.showToast("Este rut ya está en uso");
      else this.showToast("Datos ingresados");
     }); 
 }  isValid: boolean = false;
 validarUser() {

   if (this.newUsuario.correoUsuario.includes("@") &&
     (this.newUsuario.passUsuario == this.newUsuario.repassUsuario) &&
     (this.formularioRegistro.valid)) {
     this.isValid = true;
     return true;
   }
   this.showToast("Datos no son validos, reintente")
   this.isValid = false;
   return false;

 }

 async showToast(msg){
  const toast = await this.toastController.create({
    message: msg, 
    duration: 2000
  });
  toast.present();
}

}
