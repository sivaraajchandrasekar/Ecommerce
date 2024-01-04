import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KiddressComponent } from './kiddress/kiddress.component';
import { ToysComponent } from './toys/toys.component';
import { AccesoriesComponent } from './accesories/accesories.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"dress",component:KiddressComponent},
  {path:"toys",component:ToysComponent},
  {path:"access",component:AccesoriesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KidsRoutingModule { }
