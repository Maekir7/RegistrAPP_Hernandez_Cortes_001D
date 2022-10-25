import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AlumnoGuard } from './alumno.guard';
import { IngresadoGuard } from './ingresado.guard';
import { NoIngresadoGuard } from './no-ingresado.guard';
import { ProfesorGuard } from './profesor.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate: [AlumnoGuard]
  },
  {
    path: 'loginalumno',
    loadChildren: () => import('./pages/loginalumno/loginalumno.module').then( m => m.LoginPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'loginprofesor',
    loadChildren: () => import('./pages/loginprofesor/loginprofesor.module').then( m => m.LoginPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'registroalumno',
    loadChildren: () => import('./pages/registroalumno/registroalumno.module').then( m => m.RegistroPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'registroprofesor',
    loadChildren: () => import('./pages/registroprofesor/registroprofesor.module').then( m => m.RegistroPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'inicioprofesor',
    loadChildren: () => import('./pages/inicioprofesor/inicioprofesor.module').then( m => m.InicioprofesorPageModule),
    canActivate: [ProfesorGuard]
  },
  {
    path: 'logout',
    redirectTo: 'loginalumno'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
