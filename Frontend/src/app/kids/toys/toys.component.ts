import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toys',
  templateUrl: './toys.component.html',
  styleUrls: ['./toys.component.css']
})
export class ToysComponent {
constructor(private rou:Router){}

go() {
  this.rou.navigate(['buy']);
}
}
