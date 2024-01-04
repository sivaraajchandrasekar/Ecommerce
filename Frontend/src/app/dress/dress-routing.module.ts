import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MensComponent } from './mens/mens.component';
import { WomensComponent } from './womens/womens.component';

const routes: Routes = [ 
 
{path:"",component:MensComponent},
{path:"women",component:WomensComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DressRoutingModule { }
