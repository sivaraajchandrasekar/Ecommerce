import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  passwordField: any; 
  showAlert: boolean = false;
  alertMessage: string = '';
  passwordFieldType: string = 'password';
  
  constructor(private router: Router, private userService: UserService) {}

  log() {
    this.userService.login(this.username, this.password).subscribe(
      (data: any) => {
        console.log("Login Success");
        this.router.navigate(['home']);
        this.userService.setLoggedInUser(null);
         this.userService.setLoggedInUser(this.username);
      },
      (error) => {
        this.showAlert = true;
        this.alertMessage = 'Not a valid username or password. Please try again.';
        console.error('Login failed:', error);
      }
    );
  }

  sing() {
    this.router.navigate(['regi']);
  }

  togglePasswordVisibility(): void {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }
}
