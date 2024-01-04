import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-womens',
  templateUrl: './womens.component.html',
  styleUrls: ['./womens.component.css']
})
export class WomensComponent {
  constructor(private route:Router){}

  go() {
    this.route.navigate(['buy']);
  }
}
