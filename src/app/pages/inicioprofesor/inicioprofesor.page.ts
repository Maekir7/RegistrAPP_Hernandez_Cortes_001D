import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-inicioprofesor',
  templateUrl: './inicioprofesor.page.html',
  styleUrls: ['./inicioprofesor.page.scss'],
})

export class InicioprofesorPage implements OnInit {
  public qrData: string = "";

  constructor(private menuController: MenuController) {
    this.qrData = 'www.duocuc.cl#asistencia#'+localStorage.getItem('rut');
  }

  ngOnInit() {
  }
  generarQR(){
    this.qrVisible = true
  }
  qrVisible:boolean=false;
  nombre:string=localStorage.getItem('nombre');
  mostrarMenu(){
    this.menuController.open('first');
  }


}
