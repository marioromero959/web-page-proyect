import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('../app/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'nosotras',
    loadChildren: () => import('../app/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'servicios',
    loadChildren: () => import('../app/servicios/servicios.module').then(m => m.ServiciosModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('../app/contacto/contacto.module').then(m => m.ContactoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
