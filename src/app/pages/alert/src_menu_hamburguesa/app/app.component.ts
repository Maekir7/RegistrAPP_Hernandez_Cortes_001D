import { Component } from '@angular/core';

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
  constructor() {}


  componentes : Componente[] = [
    {
      icon: 'paw-outline',
      name: 'Action Sheet',
      redirecTo: '/action-sheet'
    },
    {
      icon: 'sunny-outline',
      name: 'Alert',
      redirecTo: '/alert'
    },
    {
      icon: 'card-outline',
      name: 'Card',
      redirecTo: '/card'
    },   
  ];
  



}
