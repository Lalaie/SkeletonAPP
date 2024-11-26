import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'lista',
    loadChildren: () => import('./pages/lista/lista.module').then( m => m.ListaPageModule)
  },
  {
    path: 'visto',
    loadChildren: () => import('./pages/visto/visto.module').then( m => m.VistoPageModule)
  },
  {
    path: 'ver-mas-tarde',
    loadChildren: () => import('./pages/ver-mas-tarde/ver-mas-tarde.module').then( m => m.VerMasTardePageModule)
  },
  {
    path: 'gps',
    loadChildren: () => import('./pages/gps/gps.module').then( m => m.GpsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
