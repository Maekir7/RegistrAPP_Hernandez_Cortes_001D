import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlumnoGuard implements CanActivate {


  constructor(private navController: NavController) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!localStorage.getItem('ingresado')){
        this.navController.navigateRoot('loginalumno');
        return false;
      }
      if (localStorage.getItem('tipo').startsWith("profesor")){
        this.navController.navigateRoot('inicioprofesor');
        return false;
      }
      else{
        return true;
      }
  }
  
}
