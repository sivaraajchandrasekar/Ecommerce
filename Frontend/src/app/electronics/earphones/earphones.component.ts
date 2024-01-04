import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-earphones',
  templateUrl: './earphones.component.html',
  styleUrls: ['./earphones.component.css']
})
export class EarphonesComponent {

  constructor(private rou:Router){}
  go() {
    this.rou.navigate(['buy']);
  }
}
