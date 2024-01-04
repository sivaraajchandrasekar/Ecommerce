import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DressRoutingModule } from './dress-routing.module';
import { MensComponent } from './mens/mens.component';
import { WomensComponent } from './womens/womens.component';


@NgModule({
  declarations: [
    MensComponent,
    WomensComponent
  ],
  imports: [
    CommonModule,
    DressRoutingModule
  ]
})
export class DressModule { }
