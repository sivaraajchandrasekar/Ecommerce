import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accesories',
  templateUrl: './accesories.component.html',
  styleUrls: ['./accesories.component.css']
})
export class AccesoriesComponent {
constructor(private rou:Router){} 
go() {
  this.rou.navigate(['buy']);
}
}
