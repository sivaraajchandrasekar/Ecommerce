import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileComponent } from './mobile/mobile.component';
import { IqooComponent } from './iqoo/iqoo.component';
import { IphoneComponent } from './iphone/iphone.component';
import { VivoComponent } from './vivo/vivo.component';
import { OneplusComponent } from './oneplus/oneplus.component';

const routes: Routes = [
  {path:"",component:MobileComponent},{path:"iqoo",component:IqooComponent},{path:"iphone",component:IphoneComponent},
  {path:"vivo",component:VivoComponent},{path:"oneplus",component:OneplusComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobilesRoutingModule { }
