import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrls: ['./mens.component.css']
})
export class MensComponent {
  constructor(private route:Router){}

  go() {
    this.route.navigate(['buy']);
  }
}
