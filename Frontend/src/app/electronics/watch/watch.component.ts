import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent {
constructor(private route:Router){} 
go() {
  this.route.navigate(['buy']);
}
}
