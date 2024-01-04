import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iqoo',
  templateUrl: './iqoo.component.html',
  styleUrls: ['./iqoo.component.css']
})
export class IqooComponent {
constructor(private route:Router){}
go() {
  this.route.navigate(['buy']);
}
}
