import { Component, OnInit } from '@angular/core';
import { MenuController, SelectCustomEvent } from '@ionic/angular';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-inicioprofesor',
  templateUrl: './inicioprofesor.page.html',
  styleUrls: ['./inicioprofesor.page.scss'],
})

export class InicioprofesorPage implements OnInit {
  public qrData: string = "";
  public ramo: string = "";
  public fecha: string = "";

  constructor(private menuController: MenuController) {
    this.qrData = this.fecha;
  }
  updateRamo(c:any) {
    this.ramo = c.detail.value;
  }  
  updateFecha(c:any) {
    this.fecha = format(parseISO(c.detail.value), 'ddmmyy');
  }
  ngOnInit() {
  }
  generarQR(){
    this.qrVisible = true
    this.qrData = 'APP/'+this.ramo+"/"+this.fecha+"/"+localStorage.getItem('rut');

  }
  qrVisible:boolean=false;
  nombre:string=localStorage.getItem('nombre')||"";
  mostrarMenu(){
    this.menuController.open('first');
  }


}
