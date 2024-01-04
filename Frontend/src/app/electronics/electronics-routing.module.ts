import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WatchComponent } from './watch/watch.component';
import { EarphonesComponent } from './earphones/earphones.component';

const routes: Routes = [
  {path:"",component:WatchComponent},{path:"ear",component:EarphonesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElectronicsRoutingModule { }
