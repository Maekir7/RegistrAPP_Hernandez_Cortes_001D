import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { RegistroserviceService, Usuario } from '../../services/registroservice.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin : FormGroup;
  usuarios : Usuario[] = []; 

  constructor( private alertController: AlertController, 
               private navController: NavController, 
               private registroService: RegistroserviceService,
               private fb: FormBuilder) {
                  this.formularioLogin = this.fb.group({ 
                    'correo': new FormControl("", Validators.required),
                    'password': new FormControl("", Validators.required),
                  })
                }
              
  ngOnInit() {
  }


  async Ingresar(){
    var f = this.formularioLogin.value;
    (await this.registroService.auth({
      nomUsuario: f.correo,
      correoUsuario: f.correo,
      passUsuario: f.password,
      repassUsuario: f.password
    })).subscribe(async x=>{
      if(!x)return await this.alertMsg();
      console.log("ingresado");
      localStorage.setItem('ingresado', 'true');
      this.navController.navigateRoot('inicio');
    });
  }

 async alertMsg(){
  const alert = await this.alertController.create({
    header: 'Error',
    message:'Los datos ingresados no son correctos',
    buttons: ['Aceptar'],
  });
    await alert.present();
    return;
  }



}
