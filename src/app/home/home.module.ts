import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home.component';
import {SharedModule} from '../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import { AboutModule } from '../about/about.module';
import { ContactModule } from '../contact/contact.module';

@NgModule({
  declarations: [
  HomeComponent
],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    AboutModule,
    ContactModule
  ]
})
export class HomeModule { }
