import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BuyComponent } from './buy/buy.component';
import { HomesComponent } from './homes/homes.component';

const routes: Routes = [
  {path:"regi",component:RegisterComponent},
  {path:"",component:LoginComponent},
  {path:"home",component:HomesComponent},
  {path:"buy",component:BuyComponent},
  {path:"mobiles",loadChildren:()=>import("./mobiles/mobiles.module").then(mob=>mob.MobilesModule)},
  {path:"electro",loadChildren:()=>import("./electronics/electronics.module").then(mob=>mob.ElectronicsModule)},
  {path:"dress",loadChildren:()=>import("./dress/dress.module").then(mob=>mob.DressModule)},
  {path:"kids",loadChildren:()=>import("./kids/kids.module").then(mob=>mob.KidsModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
