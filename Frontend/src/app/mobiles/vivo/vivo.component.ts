import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vivo',
  templateUrl: './vivo.component.html',
  styleUrls: ['./vivo.component.css']
})
export class VivoComponent {
constructor(private route:Router){} 
go() {
  this.route.navigate(['buy']); 
}
}
