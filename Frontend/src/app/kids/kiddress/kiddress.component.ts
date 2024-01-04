import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kiddress',
  templateUrl: './kiddress.component.html',
  styleUrls: ['./kiddress.component.css']
})
export class KiddressComponent {
constructor(private rou:Router){}

go() {
  this.rou.navigate(['buy']);
}
}
