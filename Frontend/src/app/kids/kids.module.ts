import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KidsRoutingModule } from './kids-routing.module';
import { HomeComponent } from './home/home.component';
import { ToysComponent } from './toys/toys.component';
import { KiddressComponent } from './kiddress/kiddress.component';
import { AccesoriesComponent } from './accesories/accesories.component';


@NgModule({
  declarations: [
    HomeComponent,
    ToysComponent,
    KiddressComponent,
    AccesoriesComponent
  ],
  imports: [
    CommonModule,
    KidsRoutingModule
  ]
})
export class KidsModule { }
