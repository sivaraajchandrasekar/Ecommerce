import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-oneplus',
  templateUrl: './oneplus.component.html',
  styleUrls: ['./oneplus.component.css']
})
export class OneplusComponent {
  constructor(private route:Router){}
  go() {
    this.route.navigate(["buy"]);
  }
}
