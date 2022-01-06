import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import {SharedModule} from '../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import { BannerComponent } from './components/banner/banner.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { TestimoniosComponent } from './components/testimonios/testimonios.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { ServiciosComponent } from './components/servicios/servicios.component';

@NgModule({
  declarations: [
  HomeComponent,
  BannerComponent,
  EquipoComponent,
  TestimoniosComponent,
  ContactoComponent,
  MapaComponent,
  ServiciosComponent
],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
