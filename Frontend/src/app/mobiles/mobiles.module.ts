import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobilesRoutingModule } from './mobiles-routing.module';
import { IqooComponent } from './iqoo/iqoo.component';
import { VivoComponent } from './vivo/vivo.component';
import { IphoneComponent } from './iphone/iphone.component';
import { OneplusComponent } from './oneplus/oneplus.component';
import { MobileComponent } from './mobile/mobile.component';


@NgModule({
  declarations: [
    IqooComponent,
    VivoComponent,
    IphoneComponent,
    OneplusComponent,
    MobileComponent,

  ],
  imports: [
    CommonModule,
    MobilesRoutingModule
  ]
})
export class MobilesModule { }
