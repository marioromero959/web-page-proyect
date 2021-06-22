import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/components/home.component';

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
				path: 'contact',
				loadChildren: () => import('../app/contact/contact.module').then(m => m.ContactModule)
			},
			{
				path: 'about',
				loadChildren: () => import('../app/about/about.module').then(m => m.AboutModule)
			},
			

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
