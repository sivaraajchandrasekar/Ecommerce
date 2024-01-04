import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElectronicsRoutingModule } from './electronics-routing.module';
import { WatchComponent } from './watch/watch.component';
import { EarphonesComponent } from './earphones/earphones.component';


@NgModule({
  declarations: [
    WatchComponent,
    EarphonesComponent
  ],
  imports: [
    CommonModule,
    ElectronicsRoutingModule
  ]
})
export class ElectronicsModule { }
