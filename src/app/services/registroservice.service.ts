import { Injectable } from '@angular/core';
import { Storage }  from '@ionic/storage';
import { HttpClient } from '@angular/common/http';


export interface Usuario{
  rutUsuario: string;
  nomUsuario: string; 
  correoUsuario: string;
  passUsuario: string;
  repassUsuario: string;
}

const USERS_KEY = 'my-usuarios';

@Injectable({
  providedIn: 'root'
})
export class RegistroserviceService {


  private _storage: Storage
  newUsuario: Usuario = <Usuario>{};

  constructor(private storage: Storage, private http: HttpClient) {
    this.init();
   }

   async init(){
    const storage = await this.storage.create();
    this._storage= storage;
  }
  async asistir(rut:string, ramo:string){
    return (this.http.post('https://daeloth.com/duoc/rest/alumnos/asistir', {
      "rut":rut, 
      "ramo":ramo
    }));
  }

  async authAlumno(usuario:Usuario){
    return (this.http.post('https://daeloth.com/duoc/rest/alumnos/login', {
      "rut":usuario.rutUsuario, 
      "pass":usuario.passUsuario
    }));

  }

  async authProfesor(usuario:Usuario){
    return (this.http.post('https://daeloth.com/duoc/rest/profesores/login', {
      "rut":usuario.rutUsuario, 
      "pass":usuario.passUsuario
    }));

  }
  async registerAlumno(usuario: Usuario){
    return (this.http.post('https://daeloth.com/duoc/rest/alumnos/register', {
      "rut":usuario.rutUsuario, 
      "nombre":usuario.nomUsuario,
      "correo":usuario.correoUsuario,
      "pass":usuario.passUsuario,
    }));
  }
  async registerProfesor(usuario: Usuario){
    return (this.http.post('https://daeloth.com/duoc/rest/profesores/register', {
      "rut":usuario.rutUsuario, 
      "nombre":usuario.nomUsuario,
      "correo":usuario.correoUsuario,
      "pass":usuario.passUsuario,
    }));
  }

  async getUsuarios(): Promise<Usuario[]>{
    return this.storage.get(USERS_KEY);
  }




}
