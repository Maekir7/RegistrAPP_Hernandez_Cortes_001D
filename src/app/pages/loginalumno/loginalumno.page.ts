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
  templateUrl: './loginalumno.page.html',
  styleUrls: ['./loginalumno.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin : FormGroup;
  usuarios : Usuario[] = []; 

  constructor( private alertController: AlertController, 
               private navController: NavController, 
               private registroService: RegistroserviceService,
               private fb: FormBuilder) {
                  this.formularioLogin = this.fb.group({ 
                    'rut': new FormControl("", Validators.required),
                    'password': new FormControl("", Validators.required),
                  })
                }
  ngOnInit() {

  }


  async Ingresar(){
    var f = this.formularioLogin.value;
    (await this.registroService.authAlumno({
      rutUsuario: f.rut,
      nomUsuario: f.nombre,
      correoUsuario: f.correo,
      passUsuario: f.password,
      repassUsuario: f.password
    })).subscribe(async (x:any)=>{

      if(!x)return await this.alertMsg();
      try {
        localStorage.setItem('ingresado', 'true');
        localStorage.setItem('tipo', 'alumno');
        localStorage.setItem('nombre', x.nombre);
        localStorage.setItem('rut', x.rut);
        this.navController.navigateRoot('/inicio');
      } catch (error) {
        alert(error)
      }



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
