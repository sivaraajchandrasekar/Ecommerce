import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-iphone',
  templateUrl: './iphone.component.html',
  styleUrls: ['./iphone.component.css']
})
export class IphoneComponent {
constructor(private route:Router){}
go() {
  this.route.navigate(["buy"]);
}
}
