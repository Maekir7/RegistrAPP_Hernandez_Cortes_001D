import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private navController: NavController) {}


  componentes: Componente[] = [ 
    {
      icon: 'wifi-outline',
      name: 'Inicio',
      redirecTo: '/inicio',
    },
    {
      icon: 'wifi-outline',
      name: 'Inicio Profesores',
      redirecTo: '/inicioprofesor',
    },
    {
      icon: 'bug-outline',
      name: 'Logout',
      redirecTo: '/logout',
    }
  ];
  logout(){
    localStorage.clear();
    this.navController.navigateRoot('loginalumno');

  }


}
export class QRCodeComponent {
  public myAngularxQrCode: string = null;
  constructor () {
    // assign a value
    this.myAngularxQrCode = 'Your QR code data string';
  }
}