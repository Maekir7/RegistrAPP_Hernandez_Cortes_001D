import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-inicioprofesor',
  templateUrl: './inicioprofesor.page.html',
  styleUrls: ['./inicioprofesor.page.scss'],
})

export class InicioprofesorPage implements OnInit {
  public qrData: string = "";
  public ramo: number = 0;

  constructor(private menuController: MenuController) {
    this.qrData = 'APP/'+this.ramo+"/"+localStorage.getItem('rut');
  }
  handleChange(e) {
    this.ramo = e.detail.value;
  }
  ngOnInit() {
  }
  generarQR(){
    this.qrVisible = true
    this.qrData = 'APP/'+this.ramo+"/"+localStorage.getItem('rut');

  }
  qrVisible:boolean=false;
  nombre:string=localStorage.getItem('nombre')||"";
  mostrarMenu(){
    this.menuController.open('first');
  }


}
