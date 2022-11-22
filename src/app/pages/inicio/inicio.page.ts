import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { RegistroserviceService } from '../../services/registroservice.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private menuController: MenuController,
              private registroService: RegistroserviceService,
    ) { }

  ngOnInit() {
    
  }
  async startScan() {
    await BarcodeScanner.checkPermission({ force: true });
    document.querySelector('body')?.classList.add('scanner-active');
    BarcodeScanner.hideBackground();
    const result = await BarcodeScanner.startScan();
    var rut = localStorage.getItem("rut")||"";
    var ramo = result.content?.split("/")[1]||"";
    
    (await this.registroService.asistir(rut,ramo)).subscribe(async (x:any)=>{
      if(!x.nombre)return alert("QR inválido");
      try {
        alert("Asistencia ingresada en ramo " + x.nombre)
      } catch (error) {
        alert(error)
      }



    });
    document.querySelector('body')?.classList.remove('scanner-active');
  };
  nombre:string=localStorage.getItem('nombre')||"";

  mostrarMenu(){
    this.menuController.open('first');
  }
  qrResultString: string | null;

  clearResult(): void {
    this.qrResultString = null;
  }

  onCodeResult(resultString: string) {
    this.qrResultString = resultString;
  }

}
